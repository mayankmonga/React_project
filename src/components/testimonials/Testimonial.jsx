import "./Testimonialcard.css";
import TestimonialCard from "./Testimonialcard";
import { TestimonialData } from "./Testimonialdata";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <section className="tesimonial-section">
      <div className="testinomial-content">
        <div className="about-badge">
          <span>Testimonials</span>
          <div className="badge-design"></div>
        </div>

        <h2>Trusted by Art & Décor Lovers</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          // pagination={{ clickable: true }} `
          autoplay={{
            delay: 3000,
          }}
        >
          {TestimonialData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
