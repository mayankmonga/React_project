import "./ShopByTheme.css";
import { useState } from "react";
import { themes } from "./ThemeData";
import Badgeicon from "../../assets/images/badgeicon.png";
import Maskgroup from "../../assets/images/Maskgroup.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ShopByTheme() {
  const [activetheme, setActivetheme] = useState(0);
  const currenttheme = themes[activetheme];

  const nexttheme = () => {
    if (activetheme === themes.length - 1) {
      setActivetheme(0);
    } else {
      setActivetheme(activetheme + 1);
    }
  };

  const prevtheme = () => {
    if (activetheme === 0) {
      setActivetheme(2);
    } else {
      setActivetheme(activetheme - 1);
    }
  };
  return (
    <section className="shop-theme">
      <div className="section-heading">
        <div className="about-badge">
          <span>Shop By Theme</span>
          <img src={Badgeicon} alt="Badge Icon" />
        </div>
      </div>

      <div className="theme-container">
        <div className="left-side">
          <div className="theme-main-image">
            <img src={currenttheme.mainImage} alt={currenttheme.title} />
          </div>
        </div>

        <div className="right-side">
          <div className="theme-tabs">
            {themes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => setActivetheme(index)}
                className={`tab ${activetheme === index ? "active" : ""}` }
              >
                {theme.category}

                {activetheme === index && (
                <div className="active-line">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                )}
              </button>
            ))}
          </div>
          <h2>
            {/* {currenttheme.title} */}
            <span className="first">{currenttheme.title.slice(0, 15)}</span>
            <span className="second">{currenttheme.title.slice(15)}</span>
          </h2>

          <p>{currenttheme.description}</p>
          <p>{currenttheme.description2}</p>
          <div className="theme-features">
            {currenttheme.features.map((feature, index) => (
              <div className="feature-item">
                <img src={Maskgroup} />
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <button className="explore-btn">Explore Now</button>
          <div className=" gallery-section">
            <div className="gallery-img">
              {currenttheme.gallery.map((Image, index) => (
                <img src={Image} />
              ))}

              <div className="slider-navigation">
                <button className="arrow-btn" onClick={prevtheme}>
                  <FiChevronLeft />
                </button>

                <div className="slider-dots">
                  {themes.map((theme, index) => (
                    <button
                      key={theme.id}
                      className={activetheme === index ? "dot active" : "dot"}
                      onClick={() => setActivetheme(index)}
                    ></button>
                  ))}
                </div>

                <button className="arrow-btn" onClick={nexttheme}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopByTheme;
