import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderConfig } from "../../../config";

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletClass: "swiper-bullet-item",
          bulletActiveClass: "active-bullet-class",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {sliderConfig &&
          sliderConfig.map(({ id, img, link }) => {
            return (
              <SwiperSlide className="swiper-item" key={id}>
                <img src={img} alt="slider-img" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
