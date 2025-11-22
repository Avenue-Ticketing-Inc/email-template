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

const TicketConfirmationEmail = (props: any) => {
  const {
    attendeeName = "John Doe",
    eventName = "Tech Conference 2024",
    eventDate = "December 15, 2024",
    eventTime = "9:00 AM - 6:00 PM IST",
    venue = "Convention Center, Sector 17, Chandigarh",
    venueName = "Convention Center",
    venueAddress = "Sector 17, Chandigarh",
    venueCity = "Chandigarh, India",
    ticketNumber = "TC2024-001234",
    ticketType = "General Admission",
    orderNumber = "ORD-789456123",
    qrCodeUrl = "https://assets.avenueticketing.com/email-template/qrCode.png",
    tickets = [
      { type: "Regular", quantity: 2, price: "$75.00 each" },
      { type: "Early Bird", quantity: 1, price: "$60.00 each" },
    ],
    ticketDetails = [
      { type: "Regular", section: "GA", row: "2", seat: "42", price: "$39" },
      { type: "Regular", section: "GA", row: "2", seat: "43", price: "$39" },
      {
        type: "Early Bird",
        section: "VIP",
        row: "1",
        seat: "12",
        price: "$19",
      },
    ],
    billingName = "Nathan Smith",
    billingAddress = "123 Main St, Chicago, IL 60607",
    paymentMethod = "Amex",
    totalCharge = "$97",
    lastFourDigits = "9090",
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
        Your ticket for {eventName} is confirmed! Event details inside.
      </Preview>
      <Tailwind>
        <Body className="bg-[#ffffff] font-sans py-[40px] px-[20px]">
          <Container className="bg-[#ffffff] mx-auto max-w-[600px]">
          <Section>
          <div
                className="thank-you-icon"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
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
                Thank you for your order!
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
                #{orderNumber}
              </Text>
            </Section>
            {/* Event Card */}
            <Section className="bg-[#ececec80] border border-[#FFFFFF13] rounded-[12px] mb-[24px] overflow-hidden">
              {/* Event Image */}
              <div style={{ padding: "8px" }}>
                <Img
                  src="https://assets.avenueticketing.com/email-template/bg.png"
                  alt="Event image"
                  width="100%"
                  height="200"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "200px",
                    objectFit: "fill",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="p-[20px]">
                {/* Event Title */}
                <Text className="text-black text-[24px] font-bold mb-[16px] text-large-responsive">
                  {eventName}
                </Text>

                <table
                  style={{
                    margin: "0 0 16px 0",
                    padding: 0,
                    borderSpacing: "0",
                  }}
                >
                  <tr>
                    <td
                      style={{ verticalAlign: "middle", paddingRight: "8px" }}
                    >
                      <Img
                        src="https://assets.avenueticketing.com/email-template/calendar.png"
                        alt="Calendar icon"
                        width="16"
                        height="16"
                        style={{ display: "block" }}
                      />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0", lineHeight: "1.4" }}
                      >
                        {eventDate}, {eventTime}
                      </Text>
                    </td>
                  </tr>
                </table>
                <table
                  style={{
                    margin: "0 0 16px 0",
                    padding: 0,
                    borderSpacing: "0",
                  }}
                >
                  <tr>
                    <td style={{ verticalAlign: "top", paddingRight: "8px" }}>
                      <Img
                        src="https://assets.avenueticketing.com/email-template/location.png"
                        alt="Location icon"
                        width="16"
                        height="16"
                        style={{ display: "block", marginTop: "2px" }}
                      />
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0 0 4px 0", lineHeight: "1.4" }}
                      >
                        {venueName}
                      </Text>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0 0 4px 0", lineHeight: "1.4" }}
                      >
                        {venueAddress}
                      </Text>
                      <Text
                        className="text-gray-400 text-[14px] text-small-responsive"
                        style={{ margin: "0", lineHeight: "1.4" }}
                      >
                        {venueCity}
                      </Text>
                    </td>
                  </tr>
                </table>
                {tickets.map((ticket: any, index: number) => (
                  <table
                    key={index}
                    style={{
                      margin: "0 0 16px 0",
                      padding: 0,
                      borderSpacing: "0",
                    }}
                  >
                    <tr>
                      <td
                        style={{ verticalAlign: "middle", paddingRight: "8px" }}
                      >
                        <Img
                          src="https://assets.avenueticketing.com/email-template/Frame.png"
                          alt="Ticket icon"
                          width="16"
                          height="16"
                          style={{ display: "block" }}
                        />
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        <Text
                          className="text-gray-400 text-[14px] text-small-responsive"
                          style={{ margin: "0", lineHeight: "1.4" }}
                        >
                          {ticket.type} × {ticket.quantity}
                        </Text>
                      </td>
                    </tr>
                  </table>
                ))}

                {/* Action Buttons */}
                <div>
                  <div
                    className="mb-[8px]"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "50px",
                      padding: "16px",

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
                                  src="https://assets.avenueticketing.com/email-template/code.png"
                                  alt="QR code icon"
                                  width="20"
                                  height="20"
                                />
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text
                                  style={{
                                    color: "black",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    margin: "0",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Show QR
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#000000",
                      border: "1px solid #FFFFFF13",
                      borderRadius: "50px",
                      padding: "16px",
                      textAlign: "center",
                      marginTop: "12px",
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
                                  src="https://assets.avenueticketing.com/email-template/calendar-2.png"
                                  alt="Calendar icon"
                                  width="20"
                                  height="20"
                                />
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text
                                  style={{
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    margin: "0",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Add to Calendar
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </Section>
            {/* Order Summary */}
            <Section
              className="bg-[#ececec80] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#ececec90",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/menu.png"
                  alt="Order summary icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-black text-[18px] font-semibold m-0 text-large-responsive">
                  Order summary
                </Text>
              </div>
              <div className="p-3">
                {/* Order ID */}
                <div className="mb-[16px]">
                  <Text className="text-black text-[16px] font-medium mb-[4px] text-medium-responsive">
                    Order
                  </Text>
                  <Text className="text-gray-400 text-[14px] text-small-responsive">
                    {orderNumber}
                  </Text>
                </div>

                {/* Two Column Layout */}
                <Row>
                  {/* Purchase Column */}
                  <Column className="w-[50%] pr-2">
                    <Text className="text-black text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Purchase
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      {venueName}
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      {eventDate}, {eventTime}
                    </Text>
                  </Column>

                  {/* Billing Column */}
                  <Column className="w-[50%] pl-2">
                    <Text className="text-black text-[16px] font-medium mb-[8px] text-medium-responsive">
                      Billing
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      {billingName}
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Payment method: {paymentMethod}
                    </Text>
                    <Text className="text-gray-400 text-[14px] mb-[4px] text-small-responsive">
                      Charge: {totalCharge}
                    </Text>
                    <Text className="text-gray-400 text-[14px] text-small-responsive">
                      Last 4 digits: {lastFourDigits}
                    </Text>
                  </Column>
                </Row>
              </div>
            </Section>{" "}
            {/* Your Order */}
            <Section
              className="bg-[#ececec80] rounded-[12px] mb-[24px]"
              style={{ border: "1px solid #FFFFFF13" }}
            >
              <div
                className="flex items-center gap-[8px] p-3 rounded-t-[12px]"
                style={{
                  borderBottom: "1px solid #FFFFFF13",
                  backgroundColor: "#ececec90",
                }}
              >
                <Img
                  src="https://assets.avenueticketing.com/email-template/locked.png"
                  alt="Your order icon"
                  width="20"
                  height="20"
                  className="inline-block"
                />
                <Text className="text-black text-[18px] font-semibold m-0 text-large-responsive">
                  Your Order
                </Text>
              </div>
              <div className="p-3">
                {/* Dynamic Ticket Details - Row Style */}
                {ticketDetails.map((ticket: any, index: number) => (
                  <div
                    key={index}
                    className={`${index !== ticketDetails.length - 1 ? "mb-[8px] pb-[8px]" : ""}`}
                    style={{
                      borderBottom:
                        index !== ticketDetails.length - 1
                          ? "1px solid #FFFFFF13"
                          : "none",
                    }}
                  >
                    {/* Headers Row */}
                    <table
                      style={{ width: "100%", margin: "0 0 4px 0", padding: 0 }}
                    >
                      <tr>
                        <td style={{ width: "25%", padding: "0 8px 0 0" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            SECTION
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            ROW
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            SEAT
                          </Text>
                        </td>
                        <td style={{ width: "25%", padding: "0 0 0 8px" }}>
                          <Text className="text-gray-400 text-[12px] font-medium text-tiny-responsive my-1">
                            PRICE
                          </Text>
                        </td>
                      </tr>
                    </table>

                    {/* Values Row */}
                    <table style={{ width: "100%", margin: 0, padding: 0 }}>
                      <tr>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px 0 0",
                            verticalAlign: "middle",
                            marginTop: "4px",
                            marginBottom: "4px",
                          }}
                        >
                          <table style={{ margin: 0, padding: 0 }}>
                            <tr>
                              <td
                                style={{
                                  verticalAlign: "middle",
                                  paddingRight: "8px",
                                }}
                              >
                                <Img
                                  src="https://assets.avenueticketing.com/email-template/Frame.png"
                                  alt="Ticket icon"
                                  width="16"
                                  height="16"
                                />
                              </td>
                              <td style={{ verticalAlign: "middle" }}>
                                <Text className="text-gray-500 text-[16px] font-medium text-medium-responsive">
                                  {ticket.type}
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-gray-500 text-[16px] text-medium-responsive my-1">
                            {ticket.row}
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-gray-500 text-[16px] text-medium-responsive my-1">
                            {ticket.seat}
                          </Text>
                        </td>
                        <td
                          style={{
                            width: "25%",
                            padding: "0 0 0 8px",
                            verticalAlign: "middle",
                          }}
                        >
                          <Text className="text-gray-500 text-[16px] text-medium-responsive my-1">
                            {ticket.price}
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            </Section>
            {/* QR Code Section */}
            <Section className="text-center mb-[32px]">
              <div className="bg-[#000000] border border-[#FFFFFF13] rounded-[12px] p-[24px] inline-block">
                <Img
                  src={qrCodeUrl}
                  alt="QR Code for ticket entry"
                  className="w-[200px] h-[200px] mx-auto mb-[12px]"
                />
              </div>

              {/* Wallet Buttons */}
              <div className="mt-[16px]">
                <div
                  className="bg-[#ececec80] rounded-[50px] p-[16px] mb-[8px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
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
                                src="https://assets.avenueticketing.com/email-template/appleDark.png"
                                alt="Apple Wallet icon"
                                width="20"
                                height="20"
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Text className="text-black text-[16px] font-medium m-0 text-medium-responsive">
                                Add to Apple Wallet
                              </Text>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>

                <div
                  className="bg-[#ececec80] rounded-[50px] p-[16px] text-center"
                  style={{ border: "1px solid #FFFFFF13" }}
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
                                src="https://assets.avenueticketing.com/email-template/googleDark.png"
                                alt="Google Wallet icon"
                                width="20"
                                height="20"
                              />
                            </td>
                            <td style={{ verticalAlign: "middle" }}>
                              <Text className="text-black text-[16px] font-medium m-0 text-medium-responsive">
                                Add to Google Wallet
                              </Text>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </Section>
            {/* Footer */}
            <Section className="text-center pt-[40px]">
              <table style={{ margin: "0 auto", padding: 0 }}>
                <tr>
                  <td style={{ verticalAlign: "middle", paddingRight: "8px" }}>
                    <Img
                      src="https://assets.avenueticketing.com/email-template/avenueLogoDark.png"
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
                          src="https://assets.avenueticketing.com/email-template/instaDark.png"
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
                          src="https://assets.avenueticketing.com/email-template/facebookDark.png"
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
                          src="https://assets.avenueticketing.com/email-template/twitterDark.png"
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

TicketConfirmationEmail.PreviewProps = {
  attendeeName: "John Doe",
  eventName: "Tech Conference 2024",
  eventDate: "December 15, 2024",
  eventTime: "9:00 AM - 6:00 PM IST",
  venue: "Convention Center, Sector 17, Chandigarh",
  venueName: "Convention Center",
  venueAddress: "Sector 17, Chandigarh",
  venueCity: "Chandigarh, India",
  ticketNumber: "TC2024-001234",
  ticketType: "General Admission",
  orderNumber: "ORD-789456123",
  qrCodeUrl:
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TC2024-001234",
  tickets: [
    { type: "Regular", quantity: 2, price: "$75.00 each" },
    { type: "Early Bird", quantity: 1, price: "$60.00 each" },
  ],
  ticketDetails: [
    { type: "Regular", section: "GA", row: "2", seat: "42", price: "$39" },
    { type: "Regular", section: "GA", row: "2", seat: "43", price: "$39" },
    { type: "Early Bird", section: "VIP", row: "1", seat: "12", price: "$19" },
  ],
  billingName: "Nathan Smith",
  billingAddress: "123 Main St, Chicago, IL 60607",
  paymentMethod: "Amex",
  totalCharge: "$97",
  lastFourDigits: "9090",
};

export default TicketConfirmationEmail;
