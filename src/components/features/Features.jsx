import "./Features.css";
import { features } from "./FeaturesData";


function Features() {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((item, index) => {
  const Icon = item.icon;

  return (
    <div className="feature-card" key={index}>
      <div className="feature-icon">
        <img src={Icon} alt={item.title} />
      </div>  
      <div className="feature-text">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
})}
      </div>
    </section>
  );
}

export default Features;