import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"

import Banner6 from "../../assets/images/hospital/banner6.webp";
import Banner2 from "../../assets/images/hospital/banner2.png";
import Banner3 from "../../assets/images/hospital/banner3.webp";
import Banner4 from "../../assets/images/hospital/banner4.jpg";
import Banner5 from "../../assets/images/hospital/banner5.jpg";

const Slider = () => {
  const images = [Banner6, Banner2, Banner3, Banner4, Banner5];
  return (
    <>
      <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{delay:3000, disableOnInteraction:false}}>
        {images.map((d, i) => (
          <SwiperSlide key={i}>
            <img
              src={d}
              alt="bannerImages"
              style={{ height: "550px", width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
