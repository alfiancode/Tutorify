import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import CommentItem from "./CommentItem";

export default function Comments() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <CommentItem />
        </SwiperSlide>
        <SwiperSlide>
          <CommentItem />
        </SwiperSlide>
        <SwiperSlide>
          <CommentItem />
        </SwiperSlide>
        <SwiperSlide>
          <CommentItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
