import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
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
  return (
    <div style={{margin: "2em 0"}}>
      <h1>OUR SERVICES</h1>
      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{ margin: windowSize.innerWidth > 1240 ? "0 200px" : "0 20px" }}
      >
        <Col lg={4}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title>FOR INDIVIDUALS</Card.Title>
              <Card.Text style={{ textAlign: "initial" }}>
                Preparing individuals, learners and students with the essential
                skills for the future requires all Educators to create a
                collaborative culture for learning that sparks curiosity and
                creativity. We explore with tools that will boost student
                engagement, ignite creativity, and foster collaborative learning
                and development! (Professional Statement)
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{ borderTop: "none", backgroundColor: "white" }}
            >
              {" "}
              <Button variant="primary">READ MORE</Button>{" "}
            </Card.Footer>{" "}
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title>FOR INSTITUTIONS</Card.Title>
              <Card.Text style={{ textAlign: "initial" }}>
                We help institutions / companies thrive in their business
                operations, to achieve optimal efficiency and productivity with
                our customized services, while focusing on their end goal.
              </Card.Text>
            </Card.Body>
            <Card.Footer
              style={{ borderTop: "none", backgroundColor: "white" }}
            >
              {" "}
              <Button variant="primary">MORE</Button>{" "}
            </Card.Footer>{" "}
          </Card>
        </Col>
        <Col lg={4} sm={12}>
          <Card style={{ height: "100%" }}>
            <Card.Body>
              <Card.Title>INTERN PROGRAM</Card.Title>
              <Card.Text style={{ textAlign: "initial" }}>
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
              style={{ borderTop: "none", backgroundColor: "white" }}
            >
              {" "}
              <Button variant="primary">APPLY NOW</Button>{" "}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OurServices;
