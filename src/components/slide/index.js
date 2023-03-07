import React from "react";
import Slider from "react-slick";
import "./slide.css";

function Slide() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    row: 1,
    column: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div id="slider-container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
          <div className="slider-element">
            <img src="images/burger1.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="images/burger2.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="images/burger3.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="images/burger4.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="images/burger5.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="images/burger6.jpg" alt=""></img>
          </div>
        </Slider>
      </div>
    </>
  );
}
export default Slide;
