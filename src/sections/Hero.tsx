"use client";

import React, { useEffect } from "react";
import { heroSlides } from "@/data/data";
import "./hero.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HeroSlide from "@/components/HeroSlide";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero-slider" className="hero-slider">
      <div className="container-md" data-aos="fade-in">
        <div className="col-12">
          <Swiper
            slidesPerView={"auto"}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true} // Enable built-in navigation
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            className="sliderFeaturedPosts"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                {/* Include customized hero slide template */}
                <HeroSlide slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-button-next">
            <span className="bi-chevron-right"></span>
          </div>

          <div className="custom-swiper-button-prev">
            <span className="bi-chevron-left"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
