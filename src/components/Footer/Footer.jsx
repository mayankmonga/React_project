import SocialIcons from "./FooterIcons";
import { Quicklinks, Categories, SupportLinks, Footerdesc } from "./FooterData";
import "./Footer.css";
import FooterLogo from "../../assets/images/Footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={FooterLogo} alt="Footer logo" />

          <p>{Footerdesc}</p>

          <SocialIcons />
        </div>
        <div className="links-conatiner">
          <div className="about-links">
            <h3>Quick Links</h3>
            <ul>
              {Quicklinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-links">
            <h3>Categories</h3>
            <ul>
              {Categories.map((item) => (
                <li key={item.title}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-links">
            <h3>Customer Support</h3>
            <ul>
              {SupportLinks.map((item) => (
                <li key={item.title}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
