import "./BestSeller.css";
import ProductCard from "./ProductCard";
import { Products } from "./ProductData";
import Badgeicon from "../../assets/images/badgeicon.png";

function BestSeller() {
  return (
    <section className="best-seller">

      <div className="section-heading">

        <span>Best Seller</span>
        <img src={Badgeicon} alt="Badge Icon" />    

        <h2>Our Best Seller Products</h2>

      </div>

      <div className="products-container">

        {Products.slice(0, 4).map((Product) => (
          <ProductCard
            key={Product.id}
            image={Product.image}
            title={Product.title}
            description={Product.description}
            price={Product.price}
            oldPrice={Product.oldPrice}
          />
        ))}

      </div>

    </section>
  );
}

export default BestSeller;