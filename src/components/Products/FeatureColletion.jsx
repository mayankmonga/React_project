

import { FeatureData } from "./FeatureData";
import FeaturedCard from "./FeatureCard";
import { useState } from "react";
import "./FeatureCollection.css";
import { FiArrowRight } from "react-icons/fi";

function FeatureCollection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="w-[92%] lg:w-[85%] xl:w-[80%] mx-auto py-12 lg:py-20">
      <h2 className="heading">Featured Collections</h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        onMouseLeave={() => setActiveCard(1)}
      >
        {FeatureData.map((item) => (
          <FeaturedCard
            key={item.id}
            item={item}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center lg:justify-end">
        <button className="group flex items-center gap-4 px-6 py-3 rounded-full text-lg lg:text-[26px] font-medium text-[#2F2A6B] transition-all duration-300 hover:bg-[#B9467B] hover:text-white">
          View All
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

export default FeatureCollection;