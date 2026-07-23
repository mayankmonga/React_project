import "./TestimonialCat.css";
import "./Testimonial.css"
import { TestimonialData } from "./Testimonialdata";
import TestimonialCard from "./Testimonialcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TestimonialCat() {
  return (
    <section className="cat-testimonial">
        <div className="cat-content">
          <h2 className="text-center">What Our Customers Say</h2>

            <Swiper
              modules={[Autoplay]}
              // slidesPerView={3}
              spaceBetween={20}
              loop={true}
              // pagination={{ clickable: true }} `
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
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

export default TestimonialCat;
