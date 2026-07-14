import "./BestCat.css"
import { BestCatData } from "./BestCatData";

function BestCat (){
    return(
        <section className="bestcat-section py-5">
            <div className="container-fluid p-0">
                <h2 className="text-center my-5">Best Sellers</h2>
                <div className="row bestcatcards">
                    {BestCatData.map((Best) =>(
                        <div className="col-md-3" key={Best.id}>
                            <img src={Best.image} alt="Product Image" />
                            <h3 className="my-3">{Best.title}</h3>
                            <p>{Best.desc}</p>
                            <span>Rs. {Best.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestCat;