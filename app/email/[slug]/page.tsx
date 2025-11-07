import Link from "next/link";
import { notFound } from "next/navigation";
import SimpleEmailForm from "../../../components/SimpleEmailForm";

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

const availableTemplates = Object.keys(emailTitles);

export default async function EmailPreview({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!availableTemplates.includes(slug)) {
    notFound();
  }

  const emailTitle = emailTitles[slug as keyof typeof emailTitles];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Templates
              </Link>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              {emailTitle}
            </h1>
            <div className="flex space-x-3">
              <a
                href={`/api/email?slug=${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm inline-block"
              >
                Open in New Tab
              </a>
              <a
                href={`/api/email?slug=${slug}&format=download`}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm inline-block"
              >
                Download HTML
              </a>
              <SimpleEmailForm templateSlug={slug} />
            </div>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b text-sm text-gray-600">
            Email Preview - {emailTitle}
          </div>
          <div className="p-4">
            <iframe
              src={`/api/email?slug=${slug}`}
              className="w-full h-[800px] border-0"
              title={`${emailTitle} Preview`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return availableTemplates.map((slug) => ({
    slug,
  }));
}
