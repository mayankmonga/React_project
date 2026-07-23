import "./BannerContact.css";
import Banner1 from "../../assets/images/shopbanner.jpg";

function BannerShop() {
  return (
    <section className="Banner-section">
      <div className=" w-[80%] mx-auto  main-area1">
        <div className="banner-content">
          <h3 className=" w-full md:w-[80%]">Turn Your Ideas Into Beautiful Prints</h3>

          <p className="w-full text-[#DEDEDE] text-[20px] md:w-[80%] ">From personalized gifts to business branding materials, we print your creativity with precision and premium quality finishes.</p>

          <button className="!rounded-3xl">Start Your Project Today</button>
        </div>
        <div className="banner-image">
          <img src={Banner1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default BannerShop;