import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
  <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
    </section>
  );
}

export default Hero;