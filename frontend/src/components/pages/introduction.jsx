import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function Introduction() {
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
    <div>
      <Row
        lg=""
        sm=""
        style={{
          margin: windowSize.innerWidth > 1400 ? "2em 200px" : "2em 20px",
          textAlign: "initial",
        }}
      >
        <Col sm={12} lg={6} style={{ padding: "0 1em" }}>
          <h2>HOVIA EDUCATIONAL CONSULTANTS (HEC)</h2>
          <p>
            HOVIA is the first ever (pioneer) educational consultancy 100%
            privately-owned by a black female entrepreneur, focusing on Talent
            Management, Education Change Management, Educational Coaching &
            Mentoring, Training and Quality Assurance Services in the Education
            Industry of Namibia. At HEC, we embrace a culture of Lifelong
            Learning.
          </p>
        </Col>
        <Col sm={12} lg={6}></Col>
      </Row>
    </div>
  );
}

export default Introduction;
