import "./Newsletter.css";
import Layer1 from "../../assets/images/Layer1.png";
import Layer2 from "../../assets/images/Layer2.png";
import Layer3 from "../../assets/images/Layer3.png";

function Newsletter (){
    return(
        <section className="newsletter-section">
            <div className="main-area">
                <div className="wave-image">
                    <img src={Layer1} alt="layer 1" />
                    <img src={Layer2} alt="layer 2" />
                    <img src={Layer3} alt="layer 3" />
                </div>
                <div className="news-content">
                    <div className="row">
                        <div className="col-lg-7">
                            <h2>Get Design Inspiration & Exclusive Offers</h2>

                            <p>Subscribe to receive new arrivals, special discounts, and home décor inspiration directly in your inbox.</p>
                        </div>
                        <div className="col-lg-5">
                            <label>Enter your email address</label>
                            <div className="newsletter-form">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;