import Hello from "../../assets/images/hello.jpg";
import "./ShopBy.css";

function ShopBy() {
  return (
    <section className="shopby-section pb-5">
      <div className="shopby-content w-[80%] mx-auto">
        <h2 className="my-4">Shop By Theme</h2>
        <div className="flex felx-cols-2 ">
          <img src={Hello} alt="" />
          <div className="right-content p-5">
            <h3>Turn Your Ideas Into Beautiful Prints</h3>
            <p>
              From personalized gifts to business branding materials, we print
              your creativity with precision and premium quality finishes.From
              personalized gifts to business branding materials, we print your
              creativity with precision and premium quality finishes.From
              personalized gifts to business branding materials, we print your
              creativity with precision and premium quality finishes.From
              personalized gifts to business branding materials, we print your
              creativity with precision and premium quality finishes.From
              personalized gifts to business branding materials, we print your
              creativity with precision and premium quality finishes.
            </p>
            <div className="flex gap-5 mt-10">
            <button className="bg-[#B9467B] text-white px-5 py-2 !rounded-3xl hover:bg-transparent hover:border hover:!text-black transition-all duration-300">
              Shop Collection
            </button>

            <button className="border border-black px-5 py-2 !rounded-3xl hover:!border-transparent hover:bg-[#B9467B] hover:text-white transition-all duration-300">
              Explore Categories
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ShopBy;