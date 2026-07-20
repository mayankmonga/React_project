import "./WhyChoose.css"
import Why1 from "../../assets/images/why1.jpg";
import Why2 from "../../assets/images/why2.jpg";
import Why3 from "../../assets/images/why3.jpg";
import Why4 from "../../assets/images/why4.jpg";
import Why5 from "../../assets/images/why5.jpg";

function WhyChoose() {
  return (
    <section className="whychoose-section w-[80%] mx-auto">
        <div className="Why-heading">
            <h2>Why Choose Vividkraft</h2>
            <span>Designed with Purpose. Crafted with Care.</span>
        </div>
      <div className="why-content flex ">        
        
        <div className="Why-text text-center">
          <img src={Why1} alt="" />
          <p>Premium Quality Materials</p>
        </div>
        <div
          className=" color-shape  bg-[#423264]
          [clip-path:polygon(0_0,_100%_19%,_100%_93%,_0_75%)]"
        ></div>
        
        <div className="Why-text text-center translate-y-8">
          <p>Custom-Made Designs</p>
          <img src={Why2} className="" />
        </div>
        <div
          className="color-shape bg-[#423264]
          [clip-path:polygon(0_19%,100%_0,100%_75%,0_93%)]"
        ></div>
        
        <div className="Why-text text-center">
          <img src={Why3} alt="" />
          <p>Attention to Every Detail</p>
        </div>
        <div
          className="color-shape bg-[#423264]
          [clip-path:polygon(0_0,_100%_19%,_100%_93%,_0_75%)]"
        ></div>
        
        <div className="Why-text text-center translate-y-8">
          <p>Secure Packaging & Delivery</p>
          <img src={Why4} className="" />
        </div>
        <div
          className="color-shape bg-[#423264]
          [clip-path:polygon(0_19%,100%_0,100%_75%,0_93%)]"
        ></div>
        <div className="Why-text text-center">
          <img src={Why5} alt="" />
          <p>Dedicated Customer Support</p>
        </div>
        
      </div>
    </section>
  );
}

export default WhyChoose;
