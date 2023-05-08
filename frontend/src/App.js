import "./App.css";
import HoviaNavbar from "./components/navigation/navbar";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/layout/about-us/about-us";
import { ROUTESLIST } from "./configs";
import { Layout } from "antd";
import Individuals from "./components/layout/individuals/individuals";
import Institutions from "./components/layout/institutions/institutions";
const { Content } = Layout;
const { ABOUT_US, HOME, CONTACT_US, SERVICES } = ROUTESLIST;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <HoviaNavbar />
          <Content>
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={ABOUT_US} element={<AboutUs />} />
              <Route path={SERVICES.INDIVIDUALS} element={<Individuals />} />
              <Route path={SERVICES.INSTITUTIONS} element={<Institutions />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
