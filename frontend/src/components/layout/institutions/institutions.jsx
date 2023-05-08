import React, { useEffect, useState } from "react";
import HOVIA_CONTENT_SIDEBAR from "../../shared/HOVIA_CONTENT_SIDEBAR";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";

function Institutions() {
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
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>TRAINING PROGRAMMES</h2>
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
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
                  Academic Programme/ Course Accreditation & Re-accreditation
                  Services{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Qualification Registrations on the National Qualification
                  Framework (NQF)
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Curriculum Reviews & Development{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Industry Stakeholder Engagement Facilitation{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Institutional Accreditation & Audits{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Educational Business Start Up- Facilitation{" "}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>{" "}
      </>
    );
  };
  const renderContent2 = () => {
    return (
      <>
        <Row
          xs={1}
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>TALENT MANAGEMENT REFERRAL PROGRAMME (TMRP) </h2>
            </div>
            <div>
              The goal of our candidate referral system is to make inbound
              referrals of more sustainable and more reliable source of
              candidates. With administrative tasks off their plate, educational
              leaders / hiring managers have more time to focus on becoming an
              employer of choice, with our services. Having reliable, accurate
              and timely data helps employers deliver on strategic talent
              initiatives, like pay equity or workforce diversity, with
              confidence. We source talent, assess skills and qualifications,
              manage candidate strengths, match the right skills sets and
              onboard / place right candidates with the right companies/
              institutions. We attract, engage and retain talent through our
              talent acquisition expertise, and avail the best talent to the
              hiring team at the right time.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
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
                  Talent Acquisition, Management and Referrals{" "}
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Recruitment, Interview, Selection & Onboarding of the best
                  candidates!
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  On-the-Job Training Facilitation
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
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>EDUCATION CHANGE MANAGEMENT</h2>
            </div>
            <div>
              When positive change is applied correctly, it helps to reduce
              waste and therefore reduce costs. Effective change management
              helps an organization make smart choices. It increases
              productivity, decreases risks, and helps to improve the
              profitability of an organization. We use systematic strategic
              approaches to deal with the transition or transformation of an
              education institution goals, processes, or technologies. Our
              purpose is to implement strategies for effecting change,
              controlling change, and helping people in the institutionto adapt
              to change. We introduce strategies that provide educators with an
              understanding of effective change management fundamental concepts
              and institutional benefits.
            </div>
            <div>
              <p>
                HEC will help you management change effectively in your
                institution!
              </p>
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
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
              >
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  <b>1. Change Management Training</b>
                </ListGroup.Item>

                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  • The skills to plan for, implement, and sustain change within
                  an organisation, with your own change management strategy for
                  your specific context.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  • The ability to determine a case for change and articulate
                  the need for transition to stakeholders.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  • Knowledge of the change cycle, communication and conflict
                  management skills, and a number of change management
                  strategies and models.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  • The tools to build enterprise change competency and
                  effectiveness.
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  <b>
                    2. Transition / Transformation Facilitation Change
                    Implementation
                  </b>
                </ListGroup.Item>
              </ListGroup>
              <p></p>
            </div>
          </Col>
        </Row>{" "}
      </>
    );
  };
  const renderContent4 = () => {
    return (
      <>
        <Row
          xs={1}
          style={{
            margin: windowSize.innerWidth > 1400 ? "0 300px 0 0" : "0 20px",
          }}
        >
          {" "}
          <Col style={{ textAlign: "initial" }}>
            <div>
              <h2>INSTITUTIONAL DATA MANAGEMENT</h2>
            </div>
            <div>
              HEC helps Institutions with Data collection, organizing,
              processing and analytics to support productivity, efficiency, and
              business decision-making with ease. With reliable, up-to-date
              data, companies can respond more efficiently to market changes and
              customer needs. We help institution minimize potential errors, by
              establishing processes and policies for data usage and building
              trust in the data being used to make decisions across your
              organizations.
            </div>
          </Col>
        </Row>{" "}
        <Row
          xs={1}
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
                  Database Management
                </ListGroup.Item>
                <ListGroup.Item
                  style={{ borderStyle: "none", width: "100%" }}
                  md={4}
                >
                  Data Analysis & Reporting
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
    "TALENT MANAGEMENT REFERRAL PROGRAMME (TMRP)",
    "EDUCATION CHANGE MANAGEMENT",
    "INSTITUTIONAL DATA MANAGEMENT",
  ];
  return (
    <div style={{ margin: "5em 0" }}>
      <Row>
        <Col>
          <h1
            style={{
              fontSize: windowSize.innerWidth < 460 ? "3em" : "5em",
              fontWeight: "bolder",
            }}
          >
            SERVICES FOR INSTITUTIONS
          </h1>
        </Col>
      </Row>
      <Row
        xs={1}
        style={{
          margin: windowSize.innerWidth > 1400 ? "2em 300px" : "2em 20px",
        }}
      >
        {" "}
        <Col style={{ textAlign: "" }}>
          We help institutions / companies thrive in their business operations,
          to achieve optimal efficiency and productivity with our customized
          services, while focusing on their end goal.
        </Col>
      </Row>
      <HOVIA_CONTENT_SIDEBAR contentArray={compArray} titles={titles} />
    </div>
  );
}

export default Institutions;
