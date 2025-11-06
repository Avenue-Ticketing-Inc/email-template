import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Row,
  Column,
  Img,
  Tailwind,
  Link,
} from "@react-email/components";

const OnboardingEmail = (props: any) => {
  const {
    employeeName = "John Doe",
    contactEmail = "support@example.com",
  } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .heading-responsive { font-size: 28px !important; }
            .text-large-responsive { font-size: 20px !important; }
            .text-medium-responsive { font-size: 14px !important; }
            .text-small-responsive { font-size: 12px !important; }
            .text-tiny-responsive { font-size: 11px !important; }
            .logo-text-responsive { font-size: 16px !important; }
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .contact-row {
              display: block !important;
            }
            .thank-you-icon {
              width: 40px !important;
              height: 40px !important;
              margin-bottom: 12px !important;
            }
            .thank-you-icon svg {
              width: 20px !important;
              height: 20px !important;
            }
          }
          @media only screen and (max-width: 480px) {
            .contact-column { 
              width: 100% !important; 
              padding-left: 0 !important; 
              padding-right: 0 !important; 
              margin-bottom: 16px !important;
              display: block !important;
            }
            .text-large-responsive { font-size: 18px !important; }
            .text-medium-responsive { font-size: 13px !important; }
            .thank-you-icon {
              width: 36px !important;
              height: 36px !important;
              margin-bottom: 10px !important;
            }
            .thank-you-icon svg {
              width: 18px !important;
              height: 18px !important;
            }
          }
        `}</style>
      </Head>
      <Preview>
        Employee Onboarding Complete - {employeeName} has completed Stripe verification
      </Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#0A0A0A] mx-auto max-w-[600px]">
          <Section
              className="mb-[40px] flex justify-center w-full"
            >
              <div 
              style={{
               
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}>
                <Img
                          src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                          alt="Avenue logo"
                          width="170"
                          height="35"
                        />
                        </div>
                        
            </Section>
                            {/* Thank You Banner */}
            <Section
              className="bg-[#10B981] rounded-[12px] mb-[16px] text-center"
              style={{ padding: "20px" }}
            >
              <div
                className="thank-you-icon"
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/circle-check.png"
                  alt="Checkmark icon"
                  width="50"
                  height="50"
                  style={{ display: "block" }}
                />
              </div>
              <Text
                className="text-large-responsive"
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "black",
                  margin: "0 0 8px 0",
                }}
              >
                               Employee Onboarding Complete

              </Text>
              <Text
                className="text-medium-responsive"
                style={{
                  fontSize: "16px",
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                }}
              >
                Your employee has completed Stripe verification
              </Text>
            </Section>
            
            {/* Main Content */}
            <Section className="mb-[40px]">
            
              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Great news! One of your payroll employees has successfully completed their Stripe onboarding and is now ready to receive payments.
              </Text>

              <Text className="text-white text-[18px] font-semibold leading-[1.6] mb-[20px] mt-0 text-large-responsive">
                {employeeName}
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                This employee can now receive payroll payments through your system.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[40px] mt-0 text-medium-responsive">
                You can now process payroll payments for this employee. They will receive notifications when payments are processed.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                If you have any questions, please contact support.
              </Text>

              <Text className="text-gray-400 text-[14px] leading-[1.6] mb-[0px] mt-0 text-small-responsive">
                This is an automated message. Please do not reply to this email.
              </Text>
            </Section>


            {/* Contact */}
            <Section className="text-center mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[4px]">
                Questions? Contact us at {contactEmail}
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[0px]">
                Phone: +91 98765 43210
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center pt-[40px]">
              <table style={{ margin: "0 auto", padding: 0 }}>
                <tr>
                  <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
                    <Img
                      src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                      alt="Avenue logo"
                      width="150"
                      height="25"
                    />
                  </td>
                </tr>
              </table>

              {/* Social Media Icons */}
              <div style={{ textAlign: "center", margin: "16px 0" }}>
                <table
                  style={{
                    margin: "0 auto",
                    padding: 0,
                    borderSpacing: "16px 0",
                  }}
                >
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.instagram.com/avenueticket/"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/instagram.png"
                          alt="Instagram"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://www.facebook.com/people/Avenue-Ticketing/61578022446260/#"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/facebook.png"
                          alt="Facebook"
                          width="24"
                          height="24"
                        />
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        href="https://x.com/avenueticketHQ"
                        style={{ textDecoration: "none" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/twitter.png"
                          alt="Twitter"
                          width="20"
                          height="20"
                        />
                      </Link>
                    </td>
                  </tr>
                </table>
              </div>

              <Text className="text-gray-500 text-[14px] my-[8px] text-small-responsive">
                Avenue | 101 Ave, 10th Floor | Hawaii
              </Text>
              <Text className="text-gray-500 text-[14px] mt-[4px] mb-0 text-small-responsive">
                Copyright 2025 Avenue. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingEmail.PreviewProps = {
  employeeName: "Nathan Smith",
  contactEmail: "support@example.com",
};

export default OnboardingEmail;
