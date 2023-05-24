import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function ContactUs() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const MOBILE = 992;
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <div>
      <Row style={{ margin: "50px 0" }} xs={1} md={1} lg={1}>
        <Col>
          <div className="image-container">
            <img
              style={{
                mixBlendMode: "darken",
                width: windowSize.innerWidth < 991 ? "100%" : "80%",
              }}
              src={require("../../assets/contactus.jpg")}
            ></img>
            <div
              className="intern-caption"
              style={{ fontSize: "12.5vw", textAlign: "center" }}
            >
              <div
                className="image-title sqs-dynamic-text"
                data-animation-override=""
                data-width-percentage="42.3"
                style={{ fontSize: "max(0.75rem, 42.3%)" }}
              >
                <p className="" style={{ whiteSpace: "" }}>
                  CONTACT US{" "}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col style={{ marginTop: "5em" }}>
          <div className="container">
            <div
              style={
                windowSize.innerWidth > MOBILE
                  ? { textAlign: "center" }
                  : { textAlign: "center" }
              }
            >
              {/* <h1
                style={
                  windowSize.innerWidth > MOBILE
                    ? { fontSize: "90px", fontWeight: "900" }
                    : { fontSize: "50px", fontWeight: "900" }
                }
                className="team-heading"
              >
                CONTACT US
              </h1> */}
            </div>

            <Row className="row" xs={1} md={2}>
              <Col>
                <Row className="row" xs={1} md={2} lg={3}>
                  <Col className="contact-icon">
                    <div className="contact-us-icon-names">
                      <h5>Send us a message</h5>{" "}
                    </div>
                    <a href="https://wa.me/+264817759537?text=Hello">
                      {" "}
                      <Image
                        size="small"
                        alt="whatsapp logo"
                        src={require("../../assets/03_Stacked/01_Digital/03_PNG/Black/Digital_Stacked_Black.png")}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </a>
                  </Col>
                  <Col className="contact-icon">
                    <div className="contact-us-icon-names">
                      <h5>Give us a call</h5>
                    </div>
                    <a href="tel:+26461221463">
                      <Image
                        size="tiny"
                        alt="iphone image"
                        src={require("../../assets/iphone.png")}
                        style={{ width: "60px", height: "auto" }}
                      />
                    </a>
                  </Col>
                  <Col className="contact-icon">
                    <div className="contact-us-icon-names">
                      <h5>Find us here</h5>
                    </div>{" "}
                    <a href=" https://goo.gl/maps/9BR83JEoSV2kzcgaA">
                      <Image
                        size="tiny"
                        alt="iphone image"
                        src={require("../../assets/location-pin.png")}
                        style={{ width: "60px", height: "auto" }}
                      />
                      {windowSize.innerWidth > MOBILE ? (
                        <p>
                          No. 96, Columbia Street, Dorado Park Ext. 1, Windhoek
                        </p>
                      ) : (
                        ""
                      )}
                    </a>
                  </Col>
                </Row>
              </Col>

              <Col>
                <h5>Or Send us an email</h5>{" "}
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Row
                      style={{ padding: "0 20px", textAlign: "initial" }}
                      xs={1}
                      md={1}
                    >
                      <Col>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Email Address" />
                      </Col>
                      <Col>
                        {" "}
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Col>
                      <Col>
                        {" "}
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Col>
                    </Row>
                  </Form.Group>
                  <Row style={{ padding: "0 20px", textAlign: "initial" }}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Row>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
