import React from "react";
import AboutUs from "../layout/about-us/about-us";
import HoviaCarousel from "../layout/carousel/hoviaCarousel";
import OurServices from "../layout/ourServices/ourServices";
import Introduction from "./introduction";

function Home() {
  return (
    <div>
      <HoviaCarousel />

  <Introduction/>
    <OurServices />
    </div>
  );
}

export default Home;
