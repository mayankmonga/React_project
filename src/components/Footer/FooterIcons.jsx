import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaWhatsapp, FaYoutube, } from "react-icons/fa6";
import "./FooterIcon.css";

const SocialIcons = () => {
    return(
        <div className="social-icons">
        <span className="icon"><FaFacebookF /></span>
        <span className="icon"><FaLinkedinIn /></span>
        <span className="icon"><FaInstagram /></span>
        <span className="icon"><FaXTwitter /></span>
        <span className="icon"><FaWhatsapp /></span>
        <span className="icon"><FaYoutube /></span>
    </div>
    );
    
}

export default SocialIcons;