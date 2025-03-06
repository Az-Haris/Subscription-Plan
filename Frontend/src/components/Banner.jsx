import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Slide 1 */}

      <SwiperSlide
        id="slider1"
        className="min-h-[calc(50vh-64px)]"
      ></SwiperSlide>

      {/* Slide 2 */}

      <SwiperSlide
        id="slider1"
        className="min-h-[calc(50vh-64px)]"
      ></SwiperSlide>
    </Swiper>
  );
};

export default Banner;
