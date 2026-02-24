"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

function Banner() {
  return (
     <Swiper 
     rewind={true}
     navigation={true}
     loop={true}
        autoplay={{ delay: 1500}}
      modules={[Navigation, Autoplay]} className="mySwiper home-slider">
        <SwiperSlide>
            <img src="/images/Home32.jpg" alt="Slide" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://www.coffeeness.de/wp-content/uploads/2024/03/italian-espresso-martini.jpg" alt="Slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://www.coffeeness.de/wp-content/uploads/2024/10/irish-coffee.jpg" alt="Slide" />
        </SwiperSlide>
      </Swiper>
    
  )
}

export default Banner