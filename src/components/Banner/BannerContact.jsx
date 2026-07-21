import Hello from "../../assets/images/hello.jpg";
import "./BannerContact.css";

function BannerContact() {
  return (
    <section className="Banner-section">
      <div className=" w-[80%] mx-auto  main-area1">
        <div className="banner-content">
          <h3>Your Vision. Our Craftsmanship.</h3>

          <button>Start Your Project Today</button>
        </div>
        <div className="banner-image">
          <img src={Hello} alt="" />
        </div>
      </div>
    </section>
  );
}

export default BannerContact;
