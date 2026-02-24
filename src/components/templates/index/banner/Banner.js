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
            <img src="https://www.kultbohne.de/wp-content/uploads/2024/09/Kaffeelot-03.webp" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://www.hr4.de/rat-und-tat/french-press-imago0097863342h-100~_t-1596043492094_v-16to9__retina.jpg" alt="Slide" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cupofespresso.com/wp-content/uploads/2024/01/what-is-the-ideal-grind-size-for-espresso-beans-4-1024x585.png" alt="Slide" />
        </SwiperSlide>
      </Swiper>
    
  )
}

export default Banner