import "./Testimonial.css";
import { FaStar, FaRegStar } from "react-icons/fa";

function TestimonialCard({ item, index }) {
  return (
    <div className="testiomonial-card">
      <div className="stars">
        {[...Array(5)].map((_, index) =>
          index < item.rating ? (
            <FaStar key={index} className="filled" />
          ) : (
            <FaRegStar key={index} className="empty" />
          ),
        )}
      </div>
      <p>{item.description}</p>
      <div className="review-person">
        <img src={item.image} alt="Profile pic" />
        <div className="review-detail">
          <h4>{item.name}</h4>
          <p>{item.post}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
