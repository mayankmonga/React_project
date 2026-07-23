import Img1 from "../../assets/images/img1.png";
import Img2 from "../../assets/images/img2.png";
import Badgeicon from "../../assets/images/badgeicon.png";
import "./OurPromise.css"


function OurPromise (){
    return(
        <section className="Promise-section py-5 ">
            <div className="Promise-content py-5 mx-auto w-[80%]">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                    <div className="Promise-left">
                        <div className="about-badge">
                            <span>Our Promise</span>
                            <img src={Badgeicon} alt="Badge Icon" />
                        </div>
                        <h3>More Than Décor — It's Personal</h3>
                        <p>Every order we receive represents a story, a memory, or a vision. That's why we approach each project with creativity, care, and dedication.</p>
                        <p>At Vividkraft, we're not just creating products; we're creating pieces that make spaces feel more personal, memorable, and inspiring.</p>
                    </div>
                    <div className="Promise-right">
                        <img className="image1" src={Img1} alt="" />
                        <img className="image2" src={Img2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurPromise;