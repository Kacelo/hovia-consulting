import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Individuals from "../individuals/individuals";
import { ROUTESLIST } from "../../../configs/routes.dictionary";
import Nav from "react-bootstrap/Nav";

function OurServices() {
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
  const { SERVICES } = ROUTESLIST;
  return (
    <div
      style={{ margin: "15em 0", backgroundColor: "", padding: "4em 0" }}
      className="services"
    >
      <div >
        <h1 className="team-heading">
          OUR SERVICES
        </h1>
      </div>
      <hr></hr>

      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{ margin: windowSize.innerWidth > 1720 ? "0 300px" : "0 20px" }}
      >
        <Col lg={4}>
          <Card style={{ height: "100%", borderStyle: "none" }}>
            <Card.Body>
              <Card.Img
                src={require("../../../assets/grad.jpg")}
                alt="Card image"
                style={{ borderRadius: "0", marginBottom: "2em" }}
              />
              <Card.Title className="" style={{ textAlign: "initial", padding: "0 " }}>FOR INDIVIDUALS</Card.Title>
              <Card.Text style={{ textAlign: "initial", padding: "0 " }}>
                Preparing individuals, learners and students with the essential
                skills for the future requires all Educators to create a
                collaborative culture for learning that sparks curiosity and
                creativity. We explore with tools that will boost student
                engagement, ignite creativity, and foster collaborative learning
                and development! (Professional Statement)
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                borderTop: "none",
                backgroundColor: "white",
                padding: "1em",
              }}
            >
              {" "}
              <Nav.Link href={SERVICES.INDIVIDUALS} style={{ margin: "0em" }}>
                <Button variant="primary" className="services-btn">
                  LEARN MORE
                </Button>{" "}
              </Nav.Link>
            </Card.Footer>{" "}
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ height: "100%", borderStyle: "none" }}>
            <Card.Body>
              <Card.Img
                src={require("../../../assets/institution.jpg")}
                alt="Card image"
                style={{ borderRadius: "0", marginBottom: "2em" }}
              />

              <Card.Title style={{ textAlign: "initial", padding: "0 " }}>FOR INSTITUTIONS</Card.Title>
              <Card.Text style={{ textAlign: "initial", padding: "0 " }}>
                We help institutions / companies thrive in their business
                operations, to achieve optimal efficiency and productivity with
                our customized services, while focusing on their end goal.
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                borderTop: "none",
                backgroundColor: "white",
                padding: "1em",
              }}
            >
              {" "}
              <Nav.Link href={SERVICES.INSTITUTIONS} style={{ margin: "0em" }}>
                <Button variant="primary" className="services-btn">
                  LEARN MORE
                </Button>{" "}
              </Nav.Link>{" "}
            </Card.Footer>{" "}
          </Card>
        </Col>
        <Col lg={4} sm={12}>
          <Card style={{ height: "100%", borderStyle: "none" }}>
            <Card.Body>
              <Card.Img
                src={require("../../../assets/intern2.jpg")}
                alt="Card image"
                style={{ borderRadius: "0", marginBottom: "2em" }}
              />
              <Card.Title style={{ textAlign: "initial", padding: "0 " }}>INTERN PROGRAM</Card.Title>
              <Card.Text style={{ textAlign: "initial", padding: "0 " }}>
                Our Internship Programme aims to groom and empowerment final
                year college individuals and young professionals in their
                respective field of study and develop their potential in
                preparation for the job market, by providing practical
                on-the-job training and job attachments opportunities. The
                internship period can vary between 3-6 months depending on
                availability of positions. Students can apply through our
                website
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{
                borderTop: "none",
                backgroundColor: "white",
                padding: "1em",
              }}
            >
              {" "}
              <Button variant="primary" className="services-btn">
                LEARN MORE
              </Button>{" "}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OurServices;
