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

const CompletePayment = (props: any) => {
  const {
    userName = "John Doe",
    eventName = "Tech Innovation Summit 2024",
    eventDate = "December 15, 2024",
    eventTime = "10:00 AM - 6:00 PM IST",
    eventLocation = "Chandigarh Convention Center, Punjab",
    eventDescription = "Join 500+ tech leaders, innovators, and entrepreneurs for a day of cutting-edge insights, networking, and breakthrough technologies.",
    signupLink = "https://techsummit2024.com/signup",
    eventDetailsLink = "https://techsummit2024.com/details",
    hostName = "Tech Innovation Group",
    contactEmail = "events@techinnovation.com",
    eventImage = "https://new.email/static/app/placeholder.png",
    rsvpDeadline = "December 10, 2024",
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
        We want to see you again! {eventName} - {eventDate}
      </Preview>
      <Tailwind>
        <Body className="bg-[#0A0A0A] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#0A0A0A] mx-auto max-w-[600px]">
            <Section
              className="mb-[40px] flex justify-center w-full"
            >
 
                  
                        <Img
                          src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                          alt="Avenue logo"
                          width="170"
                          height="35"
                        />
                     
               
               
   
            </Section>

            {/* Main Content */}
            <Section className="mb-[40px]">
              <Text className="text-white text-[24px] font-normal leading-[1.2]  mt-0 heading-responsive">
                Complete Your Payment Setup
              </Text>
              <Text className="text-white text-[14px] font-normal leading-[1.2] mb-[32px] mt-0 heading-responsive">
                Welcome to {hostName}! Payroll System
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Hi {userName},
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                You have been added to our payroll system and need to complete
                your payment setup to receive your payments seamlessly.
              </Text>

              <Text className="text-gray-300  text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                <strong className="text-white">What you need to do:</strong>
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[32px] mt-0 text-medium-responsive">
                1. Click the button below to access Stripe's secure onboarding.{" "}
                <br />
                2. Verify your identity and banking information. <br />
                3. Complete the setup process.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[40px] mt-0 text-medium-responsive">
              We look forward to having you onboard!
              </Text>

              {/* Sign me up button */}
              <div className="mb-[40px] w-full flex justify-center">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50px",
                    padding: "16px 32px",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "inline-block",
                    width: "full",
                  }}
                >
                  <Link href={signupLink} style={{ textDecoration: "none" }}>
                    <Text
                      style={{
                        color: "#000000",
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: "0",
                        lineHeight: "20px",
                      }}
                    >
                      Complete Payment Setup
                    </Text>
                  </Link>
                </div>
              </div>
            </Section>
            {/* notice */}
            <Section
              className="text-center mb-[32px] bg-yellow-300/20"
              style={{
                border: "1px solid #FFDE21",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              <Text className="text-[14px] text-gray-300 mb-[4px]">
                <strong className="text-white">Important:</strong> This link
                expires on {rsvpDeadline}, if you need a new link , contact your
                organizer.
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

CompletePayment.PreviewProps = {
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
};

export default CompletePayment;
