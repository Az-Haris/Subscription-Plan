import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

import { Link } from "react-router";
import { assets } from "../assets/assets";

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
        className="min-h-[calc(50vh-64px)] md:min-h-[calc(100vh-64px)] gap-5 md:gap-10 flex-col md:flex-row px-3 md:px-20 py-10"
      >
        <div className="flex-1 md:text-left ">
          <p className=" text-gray-200 text-lg md:text-2xl font-semibold">
            Explore luxurious rooms, unbeatable
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-1 md:mt-2 mb-3 md:mb-5">
            Discover Your Perfect Stay Today
          </h1>
          <p className="max-w-[700px] text-gray-400 text-sm md:text-lg mb-8">
            Explore luxurious rooms, unbeatable amenities, and seamless
            bookings. Find your dream hotel and start your adventure now.
          </p>
          <Link to={"/rooms"} className="btn-primary text-white">
            Explore Rooms
          </Link>
        </div>

        <div className="text-left flex-1">
          <img
            src={assets.Amazon}
            className="max-w-32 md:max-w-full mx-auto"
            alt=""
          />
        </div>
      </SwiperSlide>


      {/* Slide 1 */}

      <SwiperSlide
        id="slider1"
        className="min-h-[calc(50vh-64px)] md:min-h-[calc(100vh-64px)] gap-5 md:gap-10 flex-col md:flex-row px-3 md:px-20 py-10"
      >
        <div className="flex-1 md:text-left ">
          <p className=" text-gray-200 text-lg md:text-2xl font-semibold">
            Explore luxurious rooms, unbeatable
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-1 md:mt-2 mb-3 md:mb-5">
            Discover Your Perfect Stay Today
          </h1>
          <p className="max-w-[700px] text-gray-400 text-sm md:text-lg mb-8">
            Explore luxurious rooms, unbeatable amenities, and seamless
            bookings. Find your dream hotel and start your adventure now.
          </p>
          <Link to={"/rooms"} className="btn-primary text-white">
            Explore Rooms
          </Link>
        </div>

        <div className="text-left flex-1">
          <img
            src={assets.Amazon}
            className="max-w-32 md:max-w-full mx-auto"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
