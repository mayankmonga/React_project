import "./Collection.css";
import { Collections } from "./CollectionData";

function Collection() {
  return (
    <section className="collection-section my-5">
      <div className="container-fluid  ">
        <div className="row collection-content ">
          <h2 className="text-center my-5">Featured Collections</h2>

          {Collections.map((Collection) => (
            <div className=" col-12 col-lg-4 col-md-6  mx-auto " key={Collection.id}>
              <img src={Collection.image} alt="Product Image" />
              <h3 className="mt-3">{Collection.title}</h3>
              <p className="mt-4">{Collection.desc}</p>
              <span className="mt-2">Rs. {Collection.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
