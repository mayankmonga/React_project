import "./ProductCard.css";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

function ProductCard({
  image,
  title,
  description,
  price,
  oldPrice,
}) {
  return (
    <div className="product-card">

      {/* Wishlist Icon */}
      <div className="wishlist-icon">
        <FiHeart />
      </div>

      {/* Product Image */}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      {/* Product Details */}
      <div className="product-details">

        <h3>{title}</h3>

        <p>{description}</p>
        
        <div className="product-price">
          <span className="current-price">₹{price}</span>

          <del className="old-price">
            ₹{oldPrice}
          </del>
        </div>

        <button className="cart-btn">
          <FiShoppingCart />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;