import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Internship() {
  return (
    <>
      <div className="container">
        <Row>
          <Col>
            <div className="image-container">
              <img
                style={{ mixBlendMode: "darken", width: "100%" }}
                src={require("../../../assets/intern2.jpg")}
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
                  <p className="" style={{ whiteSpace: "pre-wrap" }}>
                    Intern with us
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="description">
              <div className="big-text">
                <h3 className="openning-text">
                  Our Internship Programme aims to groom and empower final year
                  college individuals and young professionals in their
                  respective field of study and develop their potential in
                  preparation for the job market, by providing practical
                  on-the-job training and job attachments opportunities.
                </h3>
                <p className="small-text">
                  The internship period can vary between 3-6 months depending on
                  availability of positions. Students can apply through our
                  website
                </p>
              </div>
              <div>
                <Button
                  variant="outline-secondary"
                  className="apply"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1gqVUKwDfC3T5AEIPyuWJJwiBx0Nk3ssKistMPi-7B5swxg/viewform"
                >
                  APPLY NOW
                </Button>{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Internship;
