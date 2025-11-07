import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const OnboardingLinkEmail = (props: any) => {
  const {
    employeeName = "Jane Smith",
    onboardingLink = "#",
    expiresAt = "Dec 31, 2025",
    organizerName = "John Doe",
  } = props;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#f6f9fc] font-sans">
          <Container 
            className="bg-white mx-auto py-5 pb-12"
            style={{
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              borderRadius: "18px",
            }}
          >
            <Section className="px-12">
              <div
                className="thank-you-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 0 auto",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/avenueLogoDark.png"
                  width="150"
                  height="30"
                  alt="avenue logo"
                />
              </div>
             
              <Hr className="border-[#e6ebf1] my-5" />
              
           
          
              <Text className="text-[#000000] font-bold text-2xl leading-6 text-center">
                Complete Your Payment Setup
              </Text>
           
              <Text className="text-[#525f7f] text-base leading-6 text-left mt-5">
                Hello {employeeName}!
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left mt-4">
                You've been added to our payroll system and need to complete your payment setup to receive payments.
              </Text>

              <Text className="text-[#000000] font-semibold text-lg leading-6 text-left mt-6 mb-3">
                What you need to do:
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left">
                1. Click the link below to access Stripe's secure onboarding.
              </Text>
              <Text className="text-[#525f7f] text-base leading-6 text-left">
                2. Verify your identity and banking information.
              </Text>
              <Text className="text-[#525f7f] text-base leading-6 text-left mb-5">
                3. Complete the setup process.
              </Text>

              <div style={{ textAlign: "center", margin: "24px 0" }}>
                <Button
                  className="bg-[#000000] rounded-[18px] text-white text-[16px] font-bold no-underline text-center block p-[16px]"
                  href={onboardingLink}
                >
                  Complete Payment Setup
                </Button>
              </div>

              <Text className="text-[#525f7f] text-base leading-6 text-left mt-5">
                <strong>Important:</strong> This link expires on {expiresAt}. If you need a new link, contact your organizer.
              </Text>

              <Text className="text-[#000000] font-semibold text-lg leading-6 text-left mt-6 mb-3">
                What happens next?
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left">
                • Once verified, you'll be able to receive payroll payments.
              </Text>
              <Text className="text-[#525f7f] text-base leading-6 text-left">
                • You'll receive notifications when payments are processed.
              </Text>
              <Text className="text-[#525f7f] text-base leading-6 text-left mb-5">
                • You can view your payment history in the system.
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left">
                If you have any questions or need assistance, please contact your organizer.
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left mt-4">
                Best regards,<br />
                {organizerName} Team
              </Text>
             
              <Hr className="border-[#e6ebf1] my-5" />
            </Section>
            
            {/* Footer */}
            <Section className="text-center">
              <Text className="text-gray-500 text-[14px] my-[8px] text-small-responsive">
                Avenue | 101 Ave, 10th Floor | Hawaii
              </Text>
              <Text className="text-gray-500 text-[14px] mt-[4px] mb-0 text-small-responsive">
                Copyright 2025 Avenue. All rights reserved.
              </Text>
            </Section>
          </Container>
          
          <Text 
            className="text-[#525f7f] text-base leading-6 text-center"
            style={{ margin: "15px 0 2px 0" }}
          >
            This is an automated message. Please do not reply to this email.
          </Text>
          <Text 
            className="text-[#525f7f] text-base leading-6 text-center"
            style={{ margin: "0" }}
          >
            If you have any questions, please contact your organizer.
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OnboardingLinkEmail;

