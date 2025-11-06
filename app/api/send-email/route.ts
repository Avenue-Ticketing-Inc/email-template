import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

// Import all email templates
import PreSaleEarlyAccessEmail from "../../../components/emails/early-access";
import EventCancellationEmail from "../../../components/emails/event-cancellation";
import EventPostponedEmail from "../../../components/emails/event-postpone";
import EventReminderEmail from "../../../components/emails/event-reminder";
import InvitationEmail from "../../../components/emails/invitation-email";
import OffersEmail from "../../../components/emails/offer-email";
import PasswordResetEmail from "../../../components/emails/password-reset";
import RefundRequestEmail from "../../../components/emails/refund-request";
import TicketCancellationEmail from "../../../components/emails/ticket-cancellaton";
import TicketConfirmationEmail from "../../../components/emails/ticket-confirmation";
import VerifyEmailAddress from "../../../components/emails/verify-email";
import WelcomeEmail from "../../../components/emails/welcome-mail";
import OnboardingEmail from "@/components/emails/onboarding-email";
import PaymentSuccessEmail from "@/components/emails/payment-success";

const emailComponents = {
  "early-access": PreSaleEarlyAccessEmail,
  "event-cancellation": EventCancellationEmail,
  "event-postpone": EventPostponedEmail,
  "event-reminder": EventReminderEmail,
  "invitation-email": InvitationEmail,
  "offer-email": OffersEmail,
  "password-reset": PasswordResetEmail,
  "refund-request": RefundRequestEmail,
  "ticket-cancellation": TicketCancellationEmail,
  "ticket-confirmation": TicketConfirmationEmail,
  "verify-email": VerifyEmailAddress,
  "welcome-mail": WelcomeEmail,
  "onboarding-mail": OnboardingEmail,
  "payment-success-mail": PaymentSuccessEmail,
  };

const emailTitles = {
  "early-access": "Early Access Email",
  "event-cancellation": "Event Cancellation Email",
  "event-postpone": "Event Postponed Email",
  "event-reminder": "Event Reminder Email",
  "invitation-email": "Invitation Email",
  "offer-email": "Offer Email",
  "password-reset": "Password Reset Email",
  "refund-request": "Refund Request Email",
  "ticket-cancellation": "Ticket Cancellation Email",
  "ticket-confirmation": "Ticket Confirmation Email",
  "verify-email": "Verify Email",
  "welcome-mail": "Welcome Email",
  "onboarding-mail": "onboarding mail",
  "payment-success-mail": "payment success mail",
};

// Sample props for each email type
const sampleProps = {
  "early-access": {
    userName: "John Doe",
    productName: "Tech Conference 2024",
    earlyAccessDate: "December 1, 2024",
    earlyAccessTime: "9:00 AM IST",
    publicSaleDate: "December 5, 2024",
    earlyBirdDiscount: "30%",
    accessLink: "https://techconference2024.com/early-access",
    accessCode: "EARLY2024",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
    productImage: "https://new.email/static/app/placeholder.png",
  },
  "event-cancellation": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    eventDate: "December 15, 2024",
    refundAmount: "₹2,500",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "welcome-mail": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    eventDate: "December 15, 2024",
    eventTime: "9:00 AM - 6:00 PM IST",
    venue: "Convention Center, Sector 17, Chandigarh",
    ticketNumber: "TC2024-001234",
    orderNumber: "ORD-789456123",
    ticketType: "Premium Pass",
    purchaseDate: "November 20, 2024",
    totalAmount: "₹2,500",
    organizerName: "Tech Conference Team",
    eventWebsite: "www.techconference2024.com",
    socialHandle: "@TechConf2024",
  },
  default: {
    userName: "John Doe",
    eventName: "Sample Event",
    companyName: "Sample Company",
    supportEmail: "support@example.com",
  },
};

export async function POST(request: NextRequest) {
  try {
    const {
      templateSlug,
      toEmail,
      fromEmail,
      fromPassword,
      smtpHost,
      smtpPort,
    } = await request.json();

    if (!templateSlug || !toEmail) {
      return NextResponse.json(
        { error: "Template slug and recipient email are required" },
        { status: 400 }
      );
    }

    // Get the email component
    const EmailComponent =
      emailComponents[templateSlug as keyof typeof emailComponents];
    if (!EmailComponent) {
      return NextResponse.json(
        { error: "Invalid template slug" },
        { status: 400 }
      );
    }

    // Get sample props for the template
    const props =
      sampleProps[templateSlug as keyof typeof sampleProps] ||
      sampleProps.default;

    // Render the email
    const emailHtml = await render(EmailComponent(props));
    const emailTitle =
      emailTitles[templateSlug as keyof typeof emailTitles] || "Email Template";

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost || "smtp.gmail.com",
      port: smtpPort || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: fromEmail,
        pass: fromPassword,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `[TEST] ${emailTitle}`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
