
import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
