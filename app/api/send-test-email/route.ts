import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import { Resend } from "resend";

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
import CompletePayment from "@/components/emails/complete-payment";
import OnboardingEmail from "@/components/emails/onboarding-email";
import PaymentSuccessEmail from "@/components/emails/payment-success";
import OnboardingLinkEmail from "@/components/emails/onboarding-link-email";
import SuccessfulOnboardedEmail from "@/components/emails/successful-onboarded-email";
import PayrollPaidEmail from "@/components/emails/payroll-paid-email";

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
  "complete-payment": CompletePayment,
  "onboarding-mail": OnboardingEmail,
  "payment-success-mail": PaymentSuccessEmail,
  "onboarding-link": OnboardingLinkEmail,
  "successful-onboarded": SuccessfulOnboardedEmail,
  "payroll-paid": PayrollPaidEmail,
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
  "complete-payment": "complete payment",
  "onboarding-mail": "onboarding mail",
  "payment-success-mail": "payment success mail",
  "onboarding-link": "Complete Your Payment Setup",
  "successful-onboarded": "Employee Onboarding Complete",
  "payroll-paid": "Payment Received",
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
  "event-postpone": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    originalDate: "December 15, 2024",
    newDate: "January 20, 2025",
    venue: "Convention Center, Sector 17, Chandigarh",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "event-reminder": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    eventDate: "December 15, 2024",
    eventTime: "9:00 AM - 6:00 PM IST",
    venue: "Convention Center, Sector 17, Chandigarh",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "invitation-email": {
    inviteeName: "John Doe",
    eventName: "Tech Conference 2024",
    eventDate: "December 15, 2024",
    eventTime: "9:00 AM - 6:00 PM IST",
    venue: "Convention Center, Sector 17, Chandigarh",
    registrationLink: "https://techconference2024.com/register",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "offer-email": {
    customerName: "John Doe",
    productName: "Tech Conference 2024",
    originalPrice: "₹3,500",
    discountedPrice: "₹2,500",
    discountPercentage: "30%",
    offerCode: "SAVE30",
    validUntil: "December 10, 2024",
    productLink: "https://techconference2024.com/register",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "password-reset": {
    userName: "John Doe",
    resetLink: "https://techconference2024.com/reset-password?token=abc123",
    expiryTime: "1 hour",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "refund-request": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    processingTime: "30 days",
  },
  "ticket-cancellation": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    ticketNumber: "TC2024-001234",
    refundAmount: "₹2,500",
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "ticket-confirmation": {
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
    companyName: "Tech Conference",
    supportEmail: "support@techconference.com",
  },
  "verify-email": {
    userName: "John Doe",
    verificationLink: "https://techconference2024.com/verify?token=abc123",
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
  "complete-payment": {
    employeeName: "John Doe",
    companyName: "Tech Solutions Ltd.",
    paymentDate: "June 30, 2024",
    paymentAmount: "₹50,000",
    paymentMethod: "Bank Transfer",
    payrollPortalLink: "https://techsolutions.com/payroll",
    supportEmail: "hey@avenueticket.com",
  },
  "payment-success-mail": {
    organizerName: "John Doe",
    formattedAmount: "$200.00",
    description: "Payroll payment to ",
    formattedDate: "Nov 6, 2025",
    employeeName: "Jane Smith",
  },
  "onboarding-link": {
    employeeName: "Jane Smith",
    onboardingLink: "https://stripe.com/onboarding",
    expiresAt: "Dec 31, 2025",
    organizerName: "John Doe",
  },
  "successful-onboarded": {
    organizerName: "John Doe",
    employeeName: "Jane Smith",
  },
  "payroll-paid": {
    organizerName: "John Doe",
    formattedAmount: "$200.00",
    description: "Payroll payment",
    transactionUrl: "https://stripe.com/transaction",
    formattedDate: "Nov 6, 2025",
    employeeName: "Jane Smith",
  },
};

export async function POST(request: NextRequest) {
  try {
    const { templateSlug, toEmail, method = "resend" } = await request.json();

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

    // Check if Resend is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    if (!resendApiKey || method !== "resend") {
      // Fallback: return HTML for download
      return NextResponse.json({
        success: false,
        html: emailHtml,
        message: "Email HTML generated successfully! Click to download.",
      });
    }

    try {
      // Send via Resend
      const resend = new Resend(resendApiKey);

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `[TEST] ${emailTitle}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          {
            error: "Failed to send email via Resend",
            details: error,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        messageId: data?.id,
        message: "Email sent successfully via Resend!",
      });
    } catch (resendError) {
      console.error("Resend API error:", resendError);

      // Fallback to HTML download if Resend fails
      return NextResponse.json({
        success: false,
        html: emailHtml,
        message: "Resend failed. Email HTML generated for download instead.",
        error:
          resendError instanceof Error
            ? resendError.message
            : "Unknown Resend error",
      });
    }
  } catch (error) {
    console.error("Error in send-test-email:", error);
    return NextResponse.json(
      {
        error: "Failed to process email request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
