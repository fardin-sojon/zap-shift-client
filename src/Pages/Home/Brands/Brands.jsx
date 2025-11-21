import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const bandLogos = [amazon, casio, moonstar, randstad, star, starPeople];

const Brands = () => {
  return (
    <div>
        <h3 className="text-center text-2xl font-bold mb-7">We've helped thousands of sales teams</h3>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {bandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="brand logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
