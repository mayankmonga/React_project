import "./AboutHero.css";
import HeroImage from "../../assets/images/Heroimage.png";
import Badgeicon from "../../assets/images/badgeicon.png";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="hero-contet">
        <div className="hero-box1">
          <h2>Let's Create Something Beautiful Together</h2>
          <p>
            Whether you're looking for custom canvas prints, handcrafted copper
            décor, or personalized artwork, we're here to bring your ideas to
            life. Reach out to our team and let's create something uniquely
            yours.
          </p>
        </div>
        <div className="hero-box2  grid grid-cols-2 gap-4 justify-center items-center">
          <div className="image-box">
            <img src={HeroImage} alt="Product Image" className="hello-img" />
          </div>
          <div className="text-box">
            <div className="heading">
              <div className="about-badge">
                <span>Our Story</span>
                <img src={Badgeicon} alt="Badge Icon" />
              </div>
              <h3 className="my-5">Where Creativity Meets Craftsmanship</h3>
              <p>
                Vividkraft was founded with a simple vision — to make
                personalized art and décor accessible, meaningful, and
                beautifully crafted.
              </p>
              <p>
                What started as a passion for creative design has grown into a
                platform where memories, emotions, and artistic ideas come to
                life through premium-quality canvas prints and handcrafted
                decorative products. Every piece we create is designed with
                care, precision, and attention to detail, ensuring that it
                becomes more than just décor — it becomes part of your story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
