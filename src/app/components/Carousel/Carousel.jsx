import "./carousel.css";

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
        modules={[Autoplay, Pagination]}
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
