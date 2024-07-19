"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css'

// import required modules
import { Pagination, Autoplay} from 'swiper/modules';
import Image from 'next/image'

import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpg'
import image3 from '@/assets/image3.jpg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.png'

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{
            "--swiper-pagination-color": "#DF6951",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            // "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bottom": "30px",
            "--swiper-pagination-bullet-width": "20px",
            "--swiper-pagination-bullet-height": "5px",
            "--swiper-pagination-bullet-border-radius": "5px",

        }}
      >
        <SwiperSlide><Image src={image5} alt="image5" className='image'/></SwiperSlide>
        <SwiperSlide><Image src={image2} alt="image2" className='image'/></SwiperSlide>
        <SwiperSlide><Image src={image1} alt="image1" className='image'/></SwiperSlide>
        <SwiperSlide><Image src={image3} alt="image3" className='image'/></SwiperSlide>      
      </Swiper>
    </>
  );
}
