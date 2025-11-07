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

export const PayrollPaidEmail = (props: any) => {
  const {
    organizerName = "John Doe",
    formattedAmount = "$200.00",
    description = "",
    transactionUrl = "#",
    formattedDate = "Nov 6, 2025",
    employeeName = "Jane Smith",
  } = props;

  // Get first letter of organizer name for avatar
  const avatarLetter = organizerName.charAt(0).toUpperCase();

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
              
              <div
                className="thank-you-icon"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#667eea",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 4px auto",
                }}
              >
                <Text
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: "1",
                  }}
                >
                  {avatarLetter}
                </Text>
              </div>
          
              <Text className="text-[#525f7f] text-base leading-6 text-center">
                {organizerName} paid {employeeName}
              </Text>
              
              <Text className="text-[#000000] font-bold text-4xl leading-6 text-center py-[10px]">
                {formattedAmount}
              </Text>
           
              {description && (
                <Text className="text-[#525f7f] text-base leading-6 text-center">
                  {description}
                </Text>
              )}

              <div style={{ textAlign: "center", margin: "24px 0" }}>
                <Button
                  className="bg-[#000000] rounded-[18px] text-white text-[16px] font-bold no-underline text-center block p-[16px]"
                  href={transactionUrl}
                >
                  See transaction
                </Button>
              </div>
        

              <Text className="text-[#000000] font-semibold text-lg leading-6 text-left mt-5 mb-3">
                Transaction details:
              </Text>

              <Text className="text-[#525f7f] text-base leading-6 text-left">
                Date: <span className="text-[#2f333f] font-semibold">{formattedDate}</span>
              </Text>
              
              <Text className="text-[#525f7f] text-base leading-6 text-left">
                Sent to: <span className="text-[#2f333f] font-semibold">{employeeName}</span>
              </Text>
              
              <Text className="text-[#525f7f] text-base leading-6 text-left mb-5">
                From: <span className="text-[#2f333f] font-semibold">{organizerName}</span>
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

export default PayrollPaidEmail;

