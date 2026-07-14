import "./WhyCustomerChoose.css";
import { WhyChoose } from "./WhyCustomerData";

function WhyCustomerChoose (){
    return(
        <section className="choose-section my-5">
            <div className="container">
                <div className="row mx-auto">
                    <h2 className="text-center my-5">
                        Why Customers Love Us
                    </h2>
                    {WhyChoose.map((why) =>(
                        <div className="col-lg-2 col-md-4    text-center mx-auto" key={why.id}>
                            <img src={why.image} alt="Why Choose Us image" />
                            <h3 className="mt-3">{why.title}</h3>
                            <p className="mt-2">{why.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default WhyCustomerChoose;