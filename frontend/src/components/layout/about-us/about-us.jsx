import React, { useEffect, useState } from "react";
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
      <div>
        {/* <div className="about-us-image">
            <img
              style={{ mixBlendMode: "darken", width: "100%" }}
              src={require("../../../assets/about-us/img2.png")}
            ></img>
          </div> */}
        <div className="image-container">
          <img
            style={{
              mixBlendMode: "darken",
              width: windowSize.innerWidth < 991 ? "100%" : "80%",
            }}
            src={require("../../../assets/lady.jpg")}
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
                GET TO KNOW US{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Row
        style={{
          margin: windowSize.innerWidth > 1500 ? "0 200px" : "0 20px",
        }}
      >
        <Col sm={12} md={12} className="about-us">
          <div
            style={{
              textAlign: "initial",
              marginTop: windowSize.innerWidth < 992 ? "2em" : "2em",
            }}
          >
            <div>
              <h2 className="openning-text">Who we are...</h2>
            </div>
            <div>
              <p className="small-text">
                <b>HEC is an Educational Consulting Company</b> that offers a
                variety of Educational Services to Learner, Students, Teachers,
                Trainers, Parents & amp; Educational Institutions. We specialize
                in Talent Management, Education Change Management, Educational
                Coaching, Training and Education Quality Assurance Services,
                among other.
              </p>
            </div>
          </div>
          <div>
            <ListGroup
              horizontal={windowSize.innerWidth > 700 ? true : false}
              style={{ textAlign: "initial" }}
            >
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                <h5 className="get-to-know-us-heading">OUR VISION</h5>
                <div style={{ textAlign: "initial" }} className="small-text">
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
                <div style={{ textAlign: "initial" }} className="small-text">
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
                <div style={{ textAlign: "initial" }} className="small-text">
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
