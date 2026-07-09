import {Link} from "react-router-dom";
import "./About.css";


function AboutPreview() {
  return (
    <Link  to="/about" className="about-link">
      <section className="about-preview">
        <div className="about-cont">

          <div className="about-h">

            <div className="about-badge">
              <span>About Us</span>
              <div className="badge-design">
              </div>
            </div>

            <h2>Crafting Spaces with Art & Elegance</h2>

          </div>

          <div className="about-content">

            <p>
              At <span>Vividkraft,</span> we believe great décor creates unforgettable spaces.
              Our carefully curated collection of canvas prints, artistic paper
              prints, and timeless copper décor products is designed to add
              personality, warmth, and sophistication to every home.
            </p>

            <p>
              From modern artwork to handcrafted decorative pieces, we bring
              together creativity, craftsmanship, and quality in every product.
            </p>

          </div>

        </div>
      </section>
    </Link>
  );
}

export default AboutPreview;