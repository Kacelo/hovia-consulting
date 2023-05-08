import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Phone, Mail, MapPin } from "react-feather";
import { ROUTESLIST } from "../../configs";
const { ABOUT_US, HOME, CONTACT_US, SERVICES } = ROUTESLIST;
function HoviaNavbar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
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
    <>
      {windowSize.innerWidth < 991 ? (
        ""
      ) : (
        <div>
          <div
            className="container-fluid"
            style={{ backgroundColor: "#B3CF32", color: "white" }}
          >
            <Row
              style={{
                alignItems: "center!important",
                padding: "1em 0 0 0",
              }}
            >
              <div
                className="middle-header-right-content"
                style={{ textAlign: "initial" }}
              >
                <ul style={{ padding: "0" }}>
                  <Row>
                    <Col sm={6} lg={4} md={6}>
                      {" "}
                      <li
                        style={{
                          listStyleType: "none",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "start",
                            position: "relative",
                            paddingLeft: "58px",
                            marginRight: "1em",
                          }}
                        >
                          <Button
                            // variant="blue "
                            style={{
                              width: "50px",
                              height: "50px",
                              position: "absolute",
                              // top: "50%",
                              left: "0",
                              textAlign: "center",
                              backgroundColor: "#BDBDBD",
                              borderColor: "#BDBDBD",
                            }}
                            href="tel:061 221 463"
                          >
                            <Phone />{" "}
                          </Button>{" "}
                          <p style={{ margin: "0" }}>Call Us</p>
                          <a href="tel:061 221 463" className="top-links">
                            {" "}
                            061 221 463
                          </a>
                        </div>
                      </li>
                    </Col>
                    <Col sm={6} lg={4} md={6}>
                      {" "}
                      <li
                        style={{
                          listStyleType: "none",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "start",
                            position: "relative",
                            paddingLeft: "58px",
                            marginRight: "1em",
                          }}
                        >
                          <Button
                            variant="secondary"
                            style={{
                              width: "50px",
                              height: "50px",
                              position: "absolute",
                              // top: "50%",
                              left: "0",
                              textAlign: "center",
                              zIndex: "1",
                              //   margin: "2em"
                              backgroundColor: "#BDBDBD",
                              borderColor: "#BDBDBD",
                            }}
                            href="mailto:hoviaconsult@iway.na"
                          >
                            <Mail />
                          </Button>{" "}
                          <div>
                            <p style={{ margin: "0" }}>Email Address</p>
                            <a
                              href="mailto:hoviaconsult@iway.na"
                              style={{ margin: "0" }}
                              className="top-links"
                            >
                              hoviaconsult@iway.na
                            </a>
                          </div>
                        </div>
                      </li>
                    </Col>
                    <Col sm={12} lg={4} md={6}>
                      {" "}
                      <li
                        style={{
                          listStyleType: "none",
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "start",
                            position: "relative",
                            paddingLeft: "58px",
                            marginRight: "1em",
                          }}
                        >
                          <Button
                            variant="secondary"
                            style={{
                              width: "50px",
                              height: "50px",
                              position: "absolute",
                              // top: "50%",
                              left: "0",
                              textAlign: "center",
                              borderColor: "#BDBDBD",
                            }}
                            href="
                            https://goo.gl/maps/9BR83JEoSV2kzcgaA"
                          >
                            <MapPin />
                          </Button>{" "}
                          <p style={{ margin: "0" }}>Address</p>
                          <a
                            href="
                                https://goo.gl/maps/9BR83JEoSV2kzcgaA"
                            style={{ margin: "0" }}
                            className="top-links"
                          >
                            No. 96, Columbia Street, Dorado Park Ext. 1,
                            Windhoek
                          </a>
                        </div>
                      </li>
                    </Col>
                  </Row>
                </ul>
              </div>
            </Row>
          </div>
        </div>
      )}
      <Row>H
        <Col></Col>
        <Col></Col>
      </Row>
      <Navbar
        // bg="light"
        expand="lg"
        style={{
          textAlign: "center",
          padding: "0em 1em",
          // backgroundColor: "#7BB601 !important",
          color: "white",
        }}
        className="nav-bar"
      >
        <Navbar.Brand href={HOME}>
          <img
            width="240"
            height="130"
            style={{ mixBlendMode: "darken" }}
            src={require("../../assets/logo/logo2.jpeg")}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ textAlign: "" }}>
          <Nav
            className="ms-auto"
            style={{
              textAlign: "initial",
              display: "flex",
              // justifyContent: "space-between",
            }}
          >
            <Nav.Link
              href={HOME}
              style={{ margin: "0em 1em" }}
              className="nav-link"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href={ABOUT_US}
              style={{ margin: "0em 1em" }}
              className="nav-link"
            >
              ABOUT US{" "}
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="SERVICES"
              menuVariant="light"
              renderMenuOnMount={true}
              style={{ margin: "0em 1em" }}
            >
              <NavDropdown.Item href={SERVICES.INDIVIDUALS}>
                {" "}
                INDIVIDUALS
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href={SERVICES.INSTITUTIONS}>
                INSTITUTIONS
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href={SERVICES.INTERNSHIPS}>
                INTERNSHIP PROGRAM{" "}
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
                Institutions
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link
              href="#link"
              style={{ margin: "0em 1em" }}
              className="nav-link"
            >
              OUR PARTNERS
            </Nav.Link> */}
            <Nav.Link
              href="#services"
              style={{ margin: "0em 1em" }}
              className="nav-link"
            >
              CONTACT US{" "}
            </Nav.Link>
          </Nav>
          {windowSize.innerWidth < 991 ? (
            <Nav>
              <div>
                <div className="container-fluid">
                  <Row style={{ padding: "0em 0" }}>
                    <div
                      className="middle-header-right-content"
                      style={{ textAlign: "initial" }}
                    >
                      <ul style={{ padding: "0" }}>
                        <Row>
                          <Col sm={4} lg={4} md={12}>
                            {" "}
                            <li
                              style={{
                                listStyleType: "none",
                                display: "inline-block",
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "start",
                                  position: "relative",
                                  paddingLeft: "58px",
                                  marginRight: "1em",
                                }}
                              >
                                <Button
                                  variant="secondary"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    position: "absolute",
                                    // top: "50%",
                                    left: "0",
                                    textAlign: "center",
                                  }}
                                  href="tel:061 221 463"
                                >
                                  <Phone />{" "}
                                </Button>{" "}
                                <p style={{ margin: "0", color: "gray" }}>Call Us</p>
                                <a href="tel:061 221 463" className="top-links-mobile">
                                  {" "}
                                  061 221 463
                                </a>
                              </div>
                            </li>
                          </Col>
                          <Col sm={6} lg={4} md={6}>
                            {" "}
                            <li
                              style={{
                                listStyleType: "none",
                                display: "inline-block",
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "start",
                                  position: "relative",
                                  paddingLeft: "58px",
                                  marginRight: "1em",
                                }}
                              >
                                <Button
                                  variant="secondary"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    position: "absolute",
                                    // top: "50%",
                                    left: "0",
                                    textAlign: "center",
                                    zIndex: "1",
                                    //   margin: "2em"
                                  }}
                                  href="mailto:hoviaconsult@iway.na"
                                >
                                  <Mail />
                                </Button>{" "}
                                <div>
                                  <p style={{ margin: "0", color: "gray" }}>Email Address</p>
                                  <a
                                    href="mailto:hoviaconsult@iway.na"
                                    style={{ margin: "0" }}
                                    className="top-links-mobile"
                                  >
                                    hoviaconsult@iway.na
                                  </a>
                                </div>
                              </div>
                            </li>
                          </Col>
                          <Col sm={12} lg={4} md={12}>
                            {" "}
                            <li
                              style={{
                                listStyleType: "none",
                                display: "inline-block",
                              }}
                            >
                              <div
                                style={{
                                  textAlign: "start",
                                  position: "relative",
                                  paddingLeft: "58px",
                                  marginRight: "1em",
                                }}
                              >
                                <Button
                                  variant="secondary"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    position: "absolute",
                                    // top: "50%",
                                    left: "0",
                                    textAlign: "center",
                                  }}
                                  href="
                                  https://goo.gl/maps/9BR83JEoSV2kzcgaA"
                                >
                                  <MapPin />
                                </Button>{" "}
                                <p style={{ margin: "0" , color: "gray"}}>Address</p>
                                <a
                                  href="
                                https://goo.gl/maps/9BR83JEoSV2kzcgaA"
                                  style={{ margin: "0" }}
                                  className="top-links-mobile"
                                >
                                  No. 96, Columbia Street, Dorado Park Ext. 1,
                                  Windhoek
                                </a>
                              </div>
                            </li>
                          </Col>
                        </Row>
                      </ul>
                    </div>
                  </Row>
                </div>
              </div>
            </Nav>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default HoviaNavbar;
