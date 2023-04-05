import "./App.css";
import HoviaNavbar from "./components/navigation/navbar";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/layout/about-us/about-us";
import { ROUTESLIST } from "./configs";
import { Layout } from "antd";
const { Content } = Layout;
const { ABOUT_US, HOME, CONTACT_US } = ROUTESLIST;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <HoviaNavbar />
          <Content>
            <Routes>
              {/* <Route path="/" element={<Layout />}> */}
              <Route path={HOME} element={<Home />} />
              <Route path={ABOUT_US} element={<AboutUs />} />
              {/* </Route> */}
            </Routes>
          </Content>
        </Layout>
        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
