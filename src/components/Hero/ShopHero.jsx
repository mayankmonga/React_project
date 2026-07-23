import { ShopHeroData } from "./ShopheroData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./ShopHero.css"

import "swiper/css";
import "swiper/css/pagination";

function ShopHero() {
  return (
    <section className="py-5 ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={15}
        pagination={{ clickable: true }}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {ShopHeroData.map((item) => (
          <SwiperSlide key={item.id} className="!w-full">
            <div
              className="shop-hero-container w-[92%] lg:w-[90%] mx-auto rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="shop-hero-text">
                <h1 className="text-5xl font-semibold leading-tight text-[#4A2B6D]">
                  {item.title}
                </h1>

                <p className="mt-6 text-gray-600">{item.desc}</p>

                <div className="hero-btns">
                  <button className="bg-[#B9467B] text-white px-5 py-2 hover:bg-transparent hover:border hover:!text-black transition-all duration-300">
                    Shop Collection
                  </button>

                  <button className="border border-black px-5 py-2 hover:!border-transparent hover:bg-[#B9467B] hover:text-white transition-all duration-300">
                    Explore Categories
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ShopHero;
