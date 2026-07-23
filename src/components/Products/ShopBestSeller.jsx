import "./ShopBest.css";
import { ShopBestData } from "./shopBestData";
import { FiArrowRight } from "react-icons/fi";

function ShopBestSeller() {
  return (
    <section className="Bestseller-shop py-5">
      <div className="Bestseller-content w-[80%] mx-auto py-5">
        <h2>Best Seller</h2>
        <div className="flex flex-cols-4 gap-5">
          {ShopBestData.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <div className="flex justify-between  items-center px-4">
                <div>
                  <del>Rs.{item.oldprice}</del>
                  <p>Rs.{item.newprice}</p>
                </div>
                <button className="bg-[#B9467B] text-white !rounded-3xl px-4 py-2">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <button className="group flex  items-center gap-[20px] !px-[30px] !py-[13px] !rounded-[32px]  bg-none text-[#2F2A6B] !text-[26px] font-medium transition-all duration-300 hover:bg-[#B9467B] hover:text-white">
            View All
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopBestSeller;
