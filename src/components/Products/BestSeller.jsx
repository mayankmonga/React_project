import "./BestSeller.css";
import ProductCard from "./ProductCard";
import { Products } from "./ProductData";
import Badgeicon from "../../assets/images/badgeicon.png";
import { useState } from "react";

function BestSeller() {
  const [active, setActive] = useState(0);
  const columns = [
  "1.2fr 1fr 1fr 1fr",
  "1fr 1.2fr 1fr 1fr",
  "1fr 1fr 1.2fr 1fr",
  "1fr 1fr 1fr 1.2fr",
];
  return (
    <section className="best-seller">

      <div className="section-heading">
        <div className="about-badge">
          <span>Best Seller</span>
          <img src={Badgeicon} alt="Badge Icon" /> 
        </div>   

        <h2>Our Best Seller Products</h2>

      </div>

      <div className="products-container" style={{
    gridTemplateColumns: columns[active],
  }}>

        {Products.slice(0, 4).map((Product,index) => (
          <div key={Product.id}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(0)}>
            <ProductCard
              
              image={Product.image}
              title={Product.title}
              description={Product.description}
              price={Product.price}
              oldPrice={Product.oldPrice}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default BestSeller;