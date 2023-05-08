import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import TeamCards from "./teamCards";

function AboutUs() {
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
    <div style={{ margin: "0 0" }}>
      <Row
        style={{
          margin: windowSize.innerWidth > 1500 ? "2em 200px" : "0 20px",
        }}
      >
        <Col sm={12} lg={6}>
          <div className="about-us-image">
            <img
              // width="240"
              // height="830"
              style={{ mixBlendMode: "darken", width: "100%" }}
              src={require("../../../assets/about-us/img2.png")}
            ></img>
          </div>
        </Col>
        <Col sm={12} lg={6} md={12}>
          <div className="about-us">
            <h1
              className="about-us-heading"
              style={{ marginTop: windowSize.innerWidth < 992 ? "" : "2em" }}
            >
              GET TO KNOW US
            </h1>
          </div>
          <div
            style={{
              textAlign: "initial",
              marginTop: windowSize.innerWidth < 992 ? "" : "0",
            }}
          >
            <div>
              <h2>Who we are...</h2>
            </div>
            <p>
              HEC is an Educational Consulting Company that offers a variety of
              Educational Services to Learner, Students, Teachers, Trainers,
              Parents & amp; Educational Institutions. We specialize in Talent
              Management, Education Change Management, Educational Coaching,
              Training and Education Quality Assurance Services, among other.
            </p>
          </div>
          <div>
            <ListGroup
              horizontal={
                windowSize.innerWidth > 700 && windowSize.innerWidth < 990
                  ? true
                  : false
              }
              style={{ textAlign: "initial" }}
            >
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                <h5 className="get-to-know-us-heading">OUR VISION</h5>
                <div style={{ textAlign: "initial" }}>
                  To be the preferred educational consultant, empowering
                  academic professionals through our consulting and training
                  programmes in the effort to create future educational leaders.{" "}
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                {" "}
                <h5 className="get-to-know-us-heading">OUR MISSION</h5>
                <div style={{ textAlign: "initial" }}>
                  In our Training and Consulting Services we continuously
                  striving to apply best practices in the Competency- Education
                  and Training Industry. We are driven by integrity, personal
                  accountability, professional services and passion for the
                  growth and development of Namibians.
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                {" "}
                <h5 className="get-to-know-us-heading">OUR VALUES</h5>
                <div style={{ textAlign: "initial" }}>
                  Transparency, Personal Accountability, Teamwork, Integrity,
                  and Relevance.
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
      <TeamCards />
    </div>
  );
}

export default AboutUs;
