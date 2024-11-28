import React from "react";
import SliderItem from "./SliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <section className="banner-slider">
      <Slider {...settings}>
        <SliderItem
          img="slider-1.jpg"
          header="NEW DROP"
          subheader="GRAPHIC TEES CAPSUL"
        />
        <SliderItem
          img="slider-2.jpg"
          header="THE QB LOUNGE TEE"
          subheader="RE-STOCKED NEW COLOR"
        />
        <SliderItem
          img="slider-3.jpg"
          header="LIMITED EDITION ONLINE EXCLUSIVE"
          subheader="STITCHED FOOTBALL TRACKPANT"
        />
      </Slider>
    </section>
  );
};

export default BannerSlider;
