import React from "react";
import Slider from "react-slick";
import "./style.css";

function Slide() {
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    row: 1,
    column: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <img src="images/burger1.jpg" alt=""></img>
        <img src="images/burger2.jpg" alt=""></img>
        <img src="images/burger3.jpg" alt=""></img>
        <img src="images/burger4.jpg" alt=""></img>
        <img src="images/burger5.jpg" alt=""></img>
        <img src="images/burger6.jpg" alt=""></img>
      </Slider>
    </>
  );
}
export default Slide;
