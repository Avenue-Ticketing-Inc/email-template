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

export const OnboardingEmail = (props: any) => {
  const {
    organizerName = "John Doe",
     mailHeading = "Employee Onboarding Complete",
    description = "Your employee has completed Stripe verification",
    formattedDate = "Nov 7, 2025",
    employeeName = "Jane Smith",
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
            > <Img
            src="https://assets.avenueticketing.com/email-template/avenueLogoDark.png"
            width="150"
            height="30"
            alt="avenue logo"
          /></div>
             
              <Hr className="border-[#e6ebf1] my-5" />
              <div
              className="thank-you-icon"
              style={{
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 4px auto",
              }}
            >
              <Img
                src="https://assets.avenueticketing.com/email-template/verificationLogo.png"
                alt="Checkmark icon"
                width="70"
                height="70"
                style={{ display: "block" }}
              />
            </div>
          
              
              <Text className="text-[#000000] font-bold text-2xl leading-6 text-center ">
              {mailHeading}
              </Text>
           
                <Text className="text-[#525f7f] text-base leading-6 text-center   ">
                  {description}{":"} {employeeName}
                </Text>
              
              
              {/* <Text className="text-[#525f7f] text-base leading-6 text-left">
              Great news! One of your payroll employees has successfully completed their Stripe onboarding and is now ready to receive payments.
              </Text> */}
             
              {/* Employee Card Section */}
              <Section
                style={{
                  backgroundColor: "#f3f4f6",
                  borderRadius: "8px",
                  padding: "16px",
                  margin: "16px 0",
                  borderLeft: "4px solid #10b981",
                }}
              >
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#1f2937",
                    margin: "0 0 8px 0",
                  }}
                >
                  {employeeName}
                </Text>
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#4b5563",
                    margin: "0",
                  }}
                >
                  This employee can now receive payroll payments through your system.
                </Text>
              </Section>
             
              <Text className="text-[#525f7f]  text-base leading-6 text-left">
              You can now process payroll payments for this employee. They will receive notifications when payments are processed.
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
            If you have questions, please contact your organizer.
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OnboardingEmail;
