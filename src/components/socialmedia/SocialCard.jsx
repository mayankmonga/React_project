import "./SocialCard.css";

function SocialCard({ item }) {
  return (
    <div className="Social-card">
      <img src={item.image} alt="Social Media" />
    </div>
  );
}

export default SocialCard;
