import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HoviaCarousel() {
  return (
    <div style={{ maxHeight: "850px" }}>
      <Carousel fade>
        <Carousel.Item style={{ maxHeight: "850px" }}>
          <img
            src={require("../../../assets/sample-images/2.png")}
            style={{ maxHeight: "850px" }}
            className="d-block w-100 h-50"
          ></img>
          <div
            className="text-block carousel-caption"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              color: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "400px",
              width: "50%",
            }}
          >
            {/* <h4 style={{ opacity: "100%" }}>Nature</h4>
            <p>What a beautiful sunrise</p> */}
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "850px" }}>
          <img
            src={require("../../../assets/sample-images/2.png")}
            style={{ maxHeight: "850px" }}
            className="d-block w-100 h-50"
          ></img>
          <div
            className="text-block"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              color: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "400px",
              width: "50%",
            }}
          >
            {/* <h4>Nature</h4>
            <p>What a beautiful sunrise</p> */}
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ maxHeight: "850px" }}>
          <img
            src={require("../../../assets/sample-images/2.png")}
            style={{ maxHeight: "850px" }}
            className="d-block w-100 h-50"
          ></img>
          <div
            className="text-block"
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              color: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              height: "400px",
              width: "50%",
            }}
          >
            {/* <h4>Nature</h4>
            <p>What a beautiful sunrise</p> */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HoviaCarousel;
