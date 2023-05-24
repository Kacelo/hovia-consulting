import "./App.css";
import HoviaNavbar from "./components/navigation/navbar";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/layout/about-us/about-us";
import { ROUTESLIST } from "./configs";
import { Layout } from "antd";
import Individuals from "./components/layout/individuals/individuals";
import Institutions from "./components/layout/institutions/institutions";
import ContactUs from "./components/contact-us/contact-us";
import Internship from "./components/layout/internship-program/internship";
import { useEffect } from "react";
import { useState } from "react";
const { Content } = Layout;
const { ABOUT_US, HOME, CONTACT_US, SERVICES, INTERNSHIPS } = ROUTESLIST;
function App() {
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
    <div className="App">
      <BrowserRouter>
        <Layout>
          <HoviaNavbar />
          <Content
            className="content"
            style={{ margin: windowSize.innerWidth > 992 ? "0 2em" : 0 }}
          >
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={ABOUT_US} element={<AboutUs />} />
              <Route path={SERVICES.INDIVIDUALS} element={<Individuals />} />
              <Route path={SERVICES.INSTITUTIONS} element={<Institutions />} />
              <Route path={CONTACT_US} element={<ContactUs />} />
              <Route path={SERVICES.INTERNSHIPS} element={<Internship />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
