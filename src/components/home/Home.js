import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

// import required modules
import { Autoplay, EffectCreative } from "swiper";

import image1 from '../../images/banners/image1.jpg'
import image2 from '../../images/banners/image2.jpg'
import image3 from '../../images/banners/image3.jpg'
import image4 from '../../images/banners/image4.jpg'

export default function Home() {
  const bannerImages = [
    image1, image2, image3, image4
  ]

  return (
    <>
      <div id="home">
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          // navigation={true}
          modules={[Autoplay, EffectCreative]}
          className="mySwiper"
        >
          {bannerImages.map((i, el) => {
            return <SwiperSlide key={el} className="slide-content">
              <img src={i} alt="Tranding"/>
            </SwiperSlide>
          })}
          <div className="hero-text">
            <h1>Fascio Photo & Film</h1>
            <p>Menangkap momen-momen berharga dalam hidup.</p>
            <form action="https://wa.me/6285640007695" target="_blank">
              <button>Contact Us</button>
            </form>
          </div>
        </Swiper>
      </div>
    </>
  );
}
