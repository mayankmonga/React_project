import "./SocialMedia.css";
import { SocialData } from "./SocialData";
import SocialCard from "./SocialCard";

function SocialMedia() {
  return (
    <section className="Social-section">
      <div className="social-cont">
        <div className="social-heading">
          <div className="about-badge">
            <span>Social Media</span>
            <div className="badge-design"></div>
          </div>

          <h2>Follow the Art of Beautiful Living</h2>
        </div>

        <div className="social-container">
          {SocialData.map((item) => (
            <SocialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
