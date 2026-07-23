import { FeatureData } from "./FeatureData";
import FeaturedCard from "./FeatureCard";
import { useState } from "react";
import "./FeatureCollection.css";
import { FiArrowRight } from "react-icons/fi";

function FeatureCollection() {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className="w-[80%] mx-auto py-20">
      <h2 className="heading ">Featured Collections</h2>

      <div
        className="grid grid-cols-4 gap-6"
        onMouseLeave={() => setActiveCard(1)}
      >
        {FeatureData.map((item, index) => (
          <FeaturedCard
            key={item.id}
            item={item}
            large={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-end">
      <button className="group flex  items-center gap-[20px] !px-[30px] !py-[13px] !rounded-[32px]  bg-none text-[#2F2A6B] !text-[26px] font-medium transition-all duration-300 hover:bg-[#B9467B] hover:text-white">
        View All
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
       </button>
       </div>
    </section>
  );
}

export default FeatureCollection;
