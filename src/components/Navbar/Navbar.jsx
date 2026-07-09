import {menuItems} from "./NavbarData";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search from "../../assets/images/search.svg";
import Profile from "../../assets/images/profile.svg";
import Kart from "../../assets/images/kart.svg";
import Logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [menuOpen, SetmenuOpen]=useState(false);

    return (
        <nav className="navbar">
            
            <div className="navbar-container">  
                <div className="menu-icon" onClick={() => SetmenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className="navbar-left">
                    <div className="navbar-logo">
                        <img src={Logo} alt="Vividkraft Logo" />
                    </div>
                </div>
                <div className="navbar-center">
                    <ul className={`navbar-menu, ${menuOpen ? "nav-links active" : "nav-links"}`}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link to={item.path} onClick={() => SetmenuOpen(false)} className="navbar-link">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-right">
                    <img src={Search} alt="Search Icon" className="navbar-icon" />
                    <img src={Profile} alt="Profile Icon" className="navbar-icon" />
                    <img src={Kart} alt="Shopping Cart Icon" className="navbar-icon" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;