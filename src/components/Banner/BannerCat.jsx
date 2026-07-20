import "./BannerCat.css";
import BannerImage from "../../assets/images/Banner2.png";

function BannerCat() {
  return (
    <section className="banner-section py-5">
      <div className="container-fluid">

        <div className="banner-card">

          <div className="row align-items-center">

            {/* Left Side */}

            <div className="col-lg-5 banner-text">

              <h2>
                Turn Your Ideas Into
                <br />
                Beautiful Prints
              </h2>

              <p>
                From personalized gifts to business branding materials,
                we print your creativity with precision and premium quality
                finishes.
              </p>

              <button className="btn banner-btn">
                Start Custom Printing
              </button>

            </div>

            {/* Right Side */}

            <div className="col-lg-7 p-0">

              <div className="banner-image">

                <img
                  src={BannerImage}
                  alt="Banner"
                  className="img-fluid"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default BannerCat;