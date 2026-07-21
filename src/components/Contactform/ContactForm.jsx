import "./ContactForm.css";
import Badgeicon from "../../assets/images/badgeicon.png";

function ContactForm (){
    return(
        <section className="conatct-section py-5">
            <div className="container-fluid  py-5">
                <div className="row mx-auto w-[80%]">
                    <div className="col-lg-6">
                        <div className="about-badge">
                            <span>Contact Us</span>
                            <img src={Badgeicon} alt="Badge Icon" />
                        </div>
                        <h3>Get in Touch</h3>
                        <p className="w-[90%]">Have a question, custom requirement, or bulk order inquiry? We'd love to hear from you. Our team is ready to assist with product information, design consultations, and personalized recommendations.</p>
                        <div className="mt-5">
                            <h6>Email</h6>
                            <p className="mb-4">hello@vividkraft.com</p>

                            <h6>Phone</h6>
                            <p className="mb-4">+91 XXXXX XXXXX</p>

                            <h6>Business Hours</h6>
                            <p className="mb-2">Monday-saturday</p>
                            <p className="mb-4">10:00AM - 7:00PM</p>

                            <h6>Location</h6>
                            <p className="mb-4">India</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3>Send Us a Message</h3>

                        <p>Fill out the form  below and we'll get back to you as soon as possible</p>

                        <form>
                            <input type="text" placeholder="Full Name " className="contact-input" />

                            <input type="email" placeholder="E-mail" className="contact-input" />

                            <input type="tel" placeholder="Phone" className="contact-input" />
                            
                            <input type="text" placeholder="Subject" className="contact-input"  />
                            
                            <textarea rows={5} placeholder="Message" className="contact-textarea"></textarea>

                            <button className="contact-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;