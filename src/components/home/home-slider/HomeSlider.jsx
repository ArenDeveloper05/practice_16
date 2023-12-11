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
import { homeConfig, sliderConfig } from "../../../config";

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
              <SwiperSlide className="swiper-item" key={id} style={{ backgroundImage: `url(${img})` }}>
                {id && 
                id===1 ?
                <div className="swiper-item-container">
                  <h1>GLOB AUDIT</h1>
          <ul>
                    {homeConfig &&
          homeConfig.map(({ id, title }) => {
            return   <li key={id}>{title}</li>
          })}            
          </ul>
          <button>Մանրամասն</button>
                </div>: <div className="first-header">
                  <h1 >GLOB AUDIT</h1>
                  </div> }
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
