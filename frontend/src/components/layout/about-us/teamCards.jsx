import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const TeamCards = () => {
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
    <div style={{ margin: "10em 0" }}>
      <h1>MEET THE TEAM</h1>
      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{ margin: windowSize.innerWidth > 1400 ? "0 150px" : "0 20px" }}
      >
        <Col lg={3} sm={12}>
          <Card style={{ height: "100%" }}>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed purus nec diam blandit tincidunt.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
            />
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed purus nec diam blandit tincidunt.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
            />
            <Card.Body>
              <Card.Title>Bob Smith</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed purus nec diam blandit tincidunt.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={12}>
          <Card>
            <Card.Img
              variant="top"
              src="https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
            />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed purus nec diam blandit tincidunt.
              </Card.Text>
              <Button variant="primary">Learn more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TeamCards;
