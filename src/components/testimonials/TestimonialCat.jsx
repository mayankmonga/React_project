import "./TestimonialCat.css";
import { TestimonialData } from "./Testimonialdata";
import TestimonialCard from "./Testimonialcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function TestimonialCat() {
  return (
    <section className="cat-testimonial">
      <div className="conatiner-fluid">
        <div className="cat-content">
          <h2 className="text-center">What Our Customers Say</h2>
          <div className="row">
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
        </div>
      </div>
    </section>
  );
}

export default TestimonialCat;
