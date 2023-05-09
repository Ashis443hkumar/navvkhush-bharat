import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




export default function Slide() {
  return (
    <>
      <Swiper class="fedfdesfgdgf"
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide  >Slide 1</SwiperSlide>
      <SwiperSlide  >Slide 2</SwiperSlide>
      <SwiperSlide  >Slide 3</SwiperSlide>
      <SwiperSlide  >Slide 4</SwiperSlide>
      <SwiperSlide  >Slide 4</SwiperSlide>
      <SwiperSlide  >Slide 5</SwiperSlide>
      <SwiperSlide  >Slide 9</SwiperSlide>
      <SwiperSlide  >Slide 8</SwiperSlide>
      ...
    </Swiper>
    </>
  );
}
