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

const InvitationEmail = (props: any) => {
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
              className="mb-[40px] "
              style={{
                border: "1px solid #FFFFFF13",
                padding: "16px",
                borderRadius: "50px",
                backgroundColor: "#232323",
              }}
            >
              <Row>
                <Column style={{ width: "auto", verticalAlign: "middle" }}>
                  <table style={{ margin: 0, padding: 0 }}>
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", paddingRight: "8px" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/avenueLogo.png"
                          alt="Avenue logo"
                          width="150"
                          height="25"
                        />
                      </td>
                    </tr>
                  </table>
                </Column>
                <Column style={{ textAlign: "right", verticalAlign: "middle" }}>
                  <Link
                    href="https://www.avenueticket.com"
                    style={{ textDecoration: "none" }}
                  >
                    <table style={{ margin: "0 0 0 auto", padding: 0 }}>
                      <tr>
                        <td
                          style={{
                            verticalAlign: "middle",
                            paddingRight: "4px",
                          }}
                        >
                          <Img
                            src="https://assets.avenueticketing.com/email-template/link.png"
                            alt="Browser icon"
                            width="16"
                            height="16"
                          />
                        </td>
                        <td style={{ verticalAlign: "middle" }}>
                          <Text
                            className="text-gray-400 text-[14px]"
                            style={{ lineHeight: "1", margin: "0" }}
                          >
                            View in browser
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Main Content */}
            <Section className="mb-[40px]">
              <Text className="text-white text-[34px] font-normal leading-[1.2] mb-[32px] mt-0 heading-responsive">
                We want to see you again!
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Hi {userName},
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                Exciting news! We have another{" "}
                <strong className="text-white">{eventName}</strong> coming up on{" "}
                <strong className="text-white">{eventDate}</strong>, and we'd
                love to see you there.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[20px] mt-0 text-medium-responsive">
                As a thanks for sticking with us, we're offering an exclusive
                discount code for previous guests.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[32px] mt-0 text-medium-responsive">
                To celebrate, we're offering a discount on tickets for a limited
                time only!
                <br />
                Use the code <strong className="text-white">COMEBACK</strong> at
                checkout to get <strong className="text-white">15% off</strong>.
              </Text>

              <Text className="text-gray-300 text-[16px] leading-[1.6] mb-[40px] mt-0 text-medium-responsive">
                Looking forward to seeing you there!
              </Text>

              {/* Sign me up button */}
              <div className="mb-[40px]">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50px",
                    padding: "16px 32px",
                    textAlign: "center",
                    display: "inline-block",
                    width: "90%",
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
                      Sign me up
                    </Text>
                  </Link>
                </div>
              </div>
            </Section>

            {/* Help Section */}
            <Section
              className="bg-[#0A0A0A] rounded-[12px] mb-[40px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#101010",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/help.png"
                  alt="Help icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-white text-[18px] font-semibold m-0 text-large-responsive">
                  Need Help?
                </Text>
              </div>
              <div className="p-3">
                <Text className="text-white text-[16px] font-semibold mb-[4px] mt-[16px] text-medium-responsive">
                  We are here for you
                </Text>
                <Text className="text-gray-400 text-[14px] mb-[24px] mt-0 text-small-responsive">
                  Reach out to us over email or phone 24/7
                </Text>

                <Row className="contact-row">
                  <Column className="w-[50%] pr-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Phone number
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/Flag.png"
                                    alt="Phone icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    (555) 987 654
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>

                  <Column className="w-[50%] pl-[10px] contact-column">
                    <Text className="text-white text-[14px] mb-[8px] mt-0 text-small-responsive">
                      Email Address
                    </Text>
                    <div
                      style={{
                        border: "1px solid #FFFFFF13",
                        borderRadius: "25px",
                        padding: "12px",
                        textAlign: "center",
                      }}
                    >
                      <table style={{ width: "100%", margin: 0, padding: 0 }}>
                        <tr>
                          <td
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <table
                              style={{
                                margin: "0 auto",
                                padding: 0,
                                borderSpacing: "0 0",
                              }}
                            >
                              <tr>
                                <td
                                  style={{
                                    verticalAlign: "middle",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Img
                                    src="https://assets.avenueticketing.com/email-template/mail.png"
                                    alt="Email icon"
                                    width="16"
                                    height="16"
                                  />
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                  <Text className="text-white text-[15px] m-0 text-small-responsive">
                                    help@avenue.events
                                  </Text>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Column>
                </Row>
              </div>
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

InvitationEmail.PreviewProps = {
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

export default InvitationEmail;
