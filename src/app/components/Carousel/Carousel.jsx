import "./carousel.css";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/img/banner/Frame1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/Frame2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/img/banner/Frame3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
