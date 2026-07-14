import "./ShopByCategory.css";
import { ShopCategoryData } from "./ShopByCategoryData";

function ShopByCategory() {
  return (
    <section className="shopcategory">
      <div className="container p-5 ">
        <div className="row justify-content-center">
          <h2 className="text-center mb-5">Shop By Category</h2>
          {ShopCategoryData.map((category) => (
            <div className="col-lg-3 text-center shopbycard" key={category.id}>
              <img src={category.image} alt="category image" />
              <h3>{category.title}</h3>
              <p>{category.desc}</p>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
}

export default ShopByCategory;
