import Link from "next/link";

export default function Home() {
  const emailTemplates = [
    {
      name: "Early Access",
      slug: "early-access",
      description: "Exclusive pre-sale invitation",
    },
    {
      name: "Event Cancellation",
      slug: "event-cancellation",
      description: "Event cancellation notification",
    },
    {
      name: "Event Postponed",
      slug: "event-postpone",
      description: "Event postponement notice",
    },
    {
      name: "Event Reminder",
      slug: "event-reminder",
      description: "Upcoming event reminder",
    },
    {
      name: "Invitation Email",
      slug: "invitation-email",
      description: "Event invitation",
    },
    {
      name: "Offer Email",
      slug: "offer-email",
      description: "Special offers and promotions",
    },
    {
      name: "Password Reset",
      slug: "password-reset",
      description: "Password reset instructions",
    },
    {
      name: "Refund Request",
      slug: "refund-request",
      description: "Refund request confirmation",
    },
    {
      name: "Ticket Cancellation",
      slug: "ticket-cancellation",
      description: "Ticket cancellation notice",
    },
    {
      name: "Ticket Confirmation",
      slug: "ticket-confirmation",
      description: "Ticket purchase confirmation",
    },
    {
      name: "Verify Email",
      slug: "verify-email",
      description: "Email address verification",
    },
    {
      name: "Welcome Email",
      slug: "welcome-mail",
      description: "Welcome to the event",
    },
    {
      name: "Payment Complete ",
      slug: "complete-payment",
      description: "Welcome to the payroll system",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📧 Email Template Preview
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any template below to see the email preview with your
            shared Header and Footer components.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emailTemplates.map((template) => (
            <Link
              key={template.slug}
              href={`/email/${template.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {template.description}
                </p>
                <div className="flex items-center text-indigo-600 font-medium text-sm">
                  View Template
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>Built with Next.js and React Email components</p>
        </footer>
      </div>
    </div>
  );
}
