import React, { useEffect, useState } from "react";
import AboutUs from "../about-us/about-us";
import HOVIA_CONTENT_SIDEBAR from "../../shared/HOVIA_CONTENT_SIDEBAR";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
function Individuals() {
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
  const renderContent1 = () => {
    return (
      <>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>TRAINING PROGRAMMES</h2>
            </div>
            <div>
              Our training packages are customized according to individual
              needs- each programme has a specific objective to meet, with our
              different training platforms online or face-2-face, depending on
              the client requirement.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Educational Leadership Programme (ELP)</h5>
            </div>
            <div>
              Focuses on coaching Senior Educational Leaders / Management of
              institutions / school, and those in academic leadership positions
              on leadership skills, soft skills, targeting Deans, HoD’s,
              Lecturers, Principals, Teachers, SRCs, LRCs etc.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Teacher Trainer Programme (TTP)</h5>
            </div>
            <div>
              Our Teach the Teacher / Train the Trainer Programme focuses on
              equipping teachers and trainers with presentation skills,
              management skills, soft skills, classroom etiquette, effective
              communication, leaner-teacher relationship building, facilitation,
              skills development and much more!
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Skills Development Programme (SDP)</h5>
            </div>
            <div>
              We focus on various skills development techniques, for
              improvement, proficiency, and productivity needed to thrive in the
              business world. We develop customized short learning courses that
              pay particular attention to immediate and adequate learning, to
              meet certain learning needs that are established by individuals,
              organisation and society as a whole.
            </div>
          </Col>
        </Row>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            {/* <div>
              <h4>Skills Development Programme (SDP)</h4>
            </div> */}
            <div>
              Maximise you staff members work efficiently in less time with
              minimal efforts with our skills development training!
            </div>
          </Col>
        </Row>
      </>
    );
  };
  const renderContent2 = () => {
    return (
      <>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>TALENT ACQUISITION MANAGEMENT PROGRAMME (TAMP) </h2>
            </div>
            <div>
              The aim of our Talent Acquisition Management Programme, Hovia
              Talent Pool (HTP) is the acquisition of knowledge, skills and
              abilities and growth through training and development. We source
              talent, assess skills and qualifications, manage candidate
              strengths, match the right skills sets and onboard / place right
              candidates with the right companies/ institutions. We attract,
              engage, and retain talent through our talent acquisition
              expertise, and avail the best talent to the hiring team at the
              right time. With our programme, the candidates have more chance of
              being hired in the right positions, with pay equity.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            {/* <div>
              <h5>Educational Leadership Programme (ELP)</h5>
            </div>
            <div>
              Focuses on coaching Senior Educational Leaders / Management of
              institutions / school, and those in academic leadership positions
              on leadership skills, soft skills, targeting Deans, HoD’s,
              Lecturers, Principals, Teachers, SRCs, LRCs etc.
            </div> */}
            <h5>we do</h5>
            <div>
              <ListGroup
                horizontal={
                  windowSize.innerWidth > 700 && windowSize.innerWidth < 990
                    ? true
                    : false
                }
                style={{ textAlign: "initial" }}
                as="ol"
                numbered
              >
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Attract & Sourcing Talent (Candidates) for Hiring
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Personal Development Training – CV Writing, Interview Prep,
                  Psychometric Assessments
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Fill Skills Gap & Promote Career Growth
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>{" "}
      </>
    );
  };
  const renderContent3 = () => {
    return (
      <>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>EDUCATIONAL COACHING & MENTORING</h2>
            </div>
            {/* <div>
              Our training packages are customized according to individual
              needs- each programme has a specific objective to meet, with our
              different training platforms online or face-2-face, depending on
              the client requirement.
            </div> */}
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Coaching & Mentorship </h5>
            </div>
            <div>
              HEC provides Mentors to guide and lead, students and leaners
              throughout their studies, providing needed educational support to
              help them achieve their career goals. We focus on personal and
              professional development of learners, students, and scholars. We
              help individuals become better learners by empowering and
              motivating them.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Career Guidance & Counselling </h5>
            </div>
            <div>
              HEC provides career guidance and counselling, with our expert
              councillors’ assisting students and learners through psychometric
              assessments, in finding their passion and make the right choices
              for their career paths. We focus on Professional Progression,
              Personal Development and Wellness of our clients.
            </div>
            <p>
              Let’s work together to be your child’s best advocates! Contact us
              today to get started.
            </p>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h5>Tutoring Programme </h5>
            </div>
            <div>
              Our Tutoring Programme is designed to cater for primary and
              secondary education Learners in all grades, as well as Tertiary
              education individuals who want to improve their academic
              performance. We offer specialized tutoring services where we
              identify learning difficulties by performing detailed educational
              evaluations and psychometric assessments, and target problem areas
              for best results, with our highly trained professionals.
              Performance is key in our programme!
            </div>
          </Col>
        </Row>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <h5>we do:</h5>
            <ListGroup
              horizontal={
                windowSize.innerWidth > 700 && windowSize.innerWidth < 990
                  ? true
                  : false
              }
              style={{ textAlign: "initial" }}
              as="ol"
              numbered
            >
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                Home-Tutoring{" "}
              </ListGroup.Item>
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                Online-Tutoring
              </ListGroup.Item>
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                Face-2-Face Tutoring{" "}
              </ListGroup.Item>
              <ListGroup.Item
                style={{ borderStyle: "none", width: "100%" }}
                md={4}
              >
                Educational App Facilitation
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  };
  const renderContent4 = () => {
    return (
      <>
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>EDUCATION FUNDING MANAGEMENT</h2>
            </div>
            <div>
              Access to inclusive and quality education is a fundamental right
              for all… HEC will help make your academic journey possible by
              securing financial support for you. We secure funding for Scholars
              in the form of Scholarships, Loans (Short term / Long term) for
              the purpose of Registration / Tuition Fees… Contact us for more
              info!
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          // md={2}
          className="g-4"
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            {/* <div>
              <h5>Educational Leadership Programme (ELP)</h5>
            </div>
            <div>
              Focuses on coaching Senior Educational Leaders / Management of
              institutions / school, and those in academic leadership positions
              on leadership skills, soft skills, targeting Deans, HoD’s,
              Lecturers, Principals, Teachers, SRCs, LRCs etc.
            </div> */}
            <h5>we do</h5>
            <div>
              <ListGroup
                horizontal={
                  windowSize.innerWidth > 700 && windowSize.innerWidth < 990
                    ? true
                    : false
                }
                style={{ textAlign: "initial" }}
                as="ol"
                numbered
              >
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Funding Applications{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Access to Funding Partners{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Educational Projects Fundraising{" "}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>{" "}
      </>
    );
  };
  const compArray = [
    renderContent1(),
    renderContent2(),
    renderContent3(),
    renderContent4(),
  ];
  const titles = [
    "TRAINING PROGRAMMES",
    "TALENT ACQUISITION MANAGEMENT PROGRAMME (TAMP)",
    "EDUCATIONAL COACHING & MENTORING",
    "EDUCATION FUNDING MANAGEMENT",
  ];
  return (
    <div style={{ margin: "5em 0" }}>
      <Row>
        <Col>
          <h1
            style={{
              fontSize: windowSize.innerWidth < 460 ? "4em" : "5em",
              fontWeight: "bolder",
            }}
          >
            SERVICES FOR INDIVIDUALS
          </h1>
        </Col>
      </Row>
      <Row
        xs={1}
        // md={2}
        className="g-4"
        style={{
          margin: windowSize.innerWidth > 1400 ? "2em 300px" : "2em 20px",
        }}
      >
        {" "}
        <Col style={{ textAlign: "" }}>
          Preparing individuals, learners and students with the essential skills
          for the future requires all Educators to create a collaborative
          culture for learning that sparks curiosity and creativity. We explore
          with tools that will boost student engagement, ignite creativity, and
          foster collaborative learning and development! (Professional
          Statement)
        </Col>
      </Row>
      <HOVIA_CONTENT_SIDEBAR contentArray={compArray} titles={titles} />
    </div>
  );
}

export default Individuals;
