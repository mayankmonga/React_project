import "./CategoryHero.css";
import CatHero from "../../assets/images/cathero.png";
import { FaArrowRight } from "react-icons/fa";

function CategoryHero() {
  return (
    <section className="cathero-section ">
      <div className="container hero-content mx-auto ">
        <p>Art that inspires. Craft that Lasts</p>
        <h1>Bring Art & Elegance</h1>
        <h1>Into Your Space</h1>
        <div className="row">
          <p className=" col-12 col-md-8 col-lg-6 col-xl-4">
            Discover premium canvas artwork, custom printing solutions, and
            handcrafted copper products designed to elevate modern homes and
            creative spaces.
          </p>
        </div>

        <div className="hero-buttons ">
          <button className="first-btn">
          Shop Collection <FaArrowRight />
        </button>

        <button className="second-btn">Explore Categories</button>
        </div>
        <div className="row justify-content-center heroend">
          <div className="col-md-2">
            <span>10,000+ Happy Customers</span>
          </div>
          <div className="col-md-2">
            <span>500+ Unique Designs</span>
          </div>
          <div className="col-md-2">
            <span>Handmade Premium Quality</span>
          </div>
          <div className="col-md-2">
            <span>Pan India Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
