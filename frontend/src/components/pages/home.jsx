import React from "react";
import HoviaCarousel from "../layout/carousel/hoviaCarousel";
import OurServices from "../layout/ourServices/ourServices";
import Introduction from "./introduction";

function Home() {
  return (
    <div>
      <HoviaCarousel />
      <Introduction />
      <OurServices />
    </div>
  );
}

export default Home;
