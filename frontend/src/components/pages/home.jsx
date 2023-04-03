import React from "react";
import AboutUs from "../layout/about-us/about-us";
import HoviaCarousel from "../layout/carousel/hoviaCarousel";
import OurServices from "../layout/ourServices/ourServices";

function Home() {
  return (
    <div>
      <HoviaCarousel />
      <AboutUs />
      <OurServices />
    </div>
  );
}

export default Home;
