import "./WhatWeDo.css";
import Whatimage from "../../assets/images/Whatwedo.png";
import Badgeicon from "../../assets/images/badgeicon.png";


function WhatWeDo (){
    return (
        <section className="what-section">
            <div className="what-content grid grid-cols-2 w-[80%] mx-auto gap-4">
                <div className="What-text">
                    <div className="about-badge">
                        <span>What We Do</span>
                        <img src={Badgeicon} alt="Badge Icon" />
                    </div>
                    <h3>Personalized Creations for Every Space</h3>
                    <p>We specialize in creating custom-designed products that bring personality and warmth to homes, offices, and special occasions.</p>
                    <h4>Our offerings include:</h4>
                    <ul>
                        <li>Custom Canvas Prints</li>
                        <li>Personalized Wall Art</li>
                        <li>Copper Decorative Products</li>
                        <li>Photo-to-Art Transformations</li>
                        <li>Gift & Special Occasion Designs</li>
                        <li>Corporate & Bulk Customization Solutions</li>
                    </ul>

                    <p>Each product is carefully crafted using high-quality materials and modern printing techniques to deliver exceptional results.</p>
                </div>
                <div className="What-img">
                    <img src={Whatimage} alt=" What image" />
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;