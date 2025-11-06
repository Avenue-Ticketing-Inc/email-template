import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";

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
  "onboarding-mail": {
    userName: "Nathan",
    eventName: "After Hours Neon",
    eventDate: "Jan 7th, 2025",
    eventTime: "10:00 AM - 6:00 PM IST",
    eventLocation: "Chandigarh Convention Center, Punjab",
    eventDescription:
      "Join us for an exclusive after hours event with neon lights and great music.",
    signupLink: "https://avenue.com/signup",
    eventDetailsLink: "https://avenue.com/details",
    hostName: "Avenue Events",
    contactEmail: "help@avenue.events",
    eventImage: "https://new.email/static/app/placeholder.png",
    rsvpDeadline: "January 5, 2025",
  },
  "payment-success-mail": {
    attendeeName: "John Doe",
    eventName: "Tech Conference 2024",
    eventDate: "December 15, 2024",
    eventTime: "9:00 AM - 6:00 PM IST",
    venue: "Convention Center, Sector 17, Chandigarh",
    ticketNumber: "TC2024-001234",
  },
  // Add default props for other templates
  default: {
    userName: "John Doe",
    eventName: "Sample Event",
    companyName: "Sample Company",
    supportEmail: "support@example.com",
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const format = searchParams.get("format") || "html";

  if (!slug || !emailComponents[slug as keyof typeof emailComponents]) {
    return NextResponse.json(
      { error: "Email template not found" },
      { status: 404 }
    );
  }

  try {
    const EmailComponent =
      emailComponents[slug as keyof typeof emailComponents];
    const props =
      sampleProps[slug as keyof typeof sampleProps] || sampleProps.default;

    const emailHtml = await render(EmailComponent(props));

    if (format === "download") {
      return new NextResponse(emailHtml, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
          "Content-Disposition": `attachment; filename="${slug}-email-template.html"`,
        },
      });
    }

    // Return HTML for iframe or direct viewing
    return new NextResponse(emailHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Error rendering email:", error);
    return NextResponse.json(
      { error: "Failed to render email template" },
      { status: 500 }
    );
  }
}
