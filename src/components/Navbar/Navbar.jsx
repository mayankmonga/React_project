import {menuItems} from "./NavbarData";
import "./Navbar.css";
import {FiSearch, FiUser, FiShoppingCart,} from "react-icons/fi";
import Logo from "../../assets/images/logo.jpg";

function Navbar() {



    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={Logo} alt="Vividkraft Logo" />
                </div>
            </div>
            <div className="navbar-center">
                <ul className="navbar-menu">
                    {menuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <FiSearch className="navbar-icon" />
                <FiUser className="navbar-icon" />
                <FiShoppingCart className="navbar-icon" />
            </div>
        </nav>
    );
}

export default Navbar;