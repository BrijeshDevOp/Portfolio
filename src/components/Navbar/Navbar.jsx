import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_new.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    return (
        <div className="navbar">
            <img src={logo} alt="" srcset="" />
            <img src={menu_open} alt="" className="nav-mob-open" onClick={openMenu} />
            <ul className="nav-menu" ref={menuRef}>
                <img
                    src={menu_close}
                    alt=""
                    srcset=""
                    className="nav-mob-close"
                    onClick={closeMenu}
                />
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                        {menu === "home" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About Me</p>
                        {menu === "about" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#education">
                        <p onClick={() => setMenu("education")}>Education</p>
                        {menu === "education" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#certificates">
                        <p onClick={() => setMenu("certificates")}>Certificates</p>
                        {menu === "Certificates" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => setMenu("portfolio")}>Portfolio</p>
                        {menu === "portfolio" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                        {menu === "contact" ? <img src={underline} /> : <></>}
                    </AnchorLink>
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    <p onClick={() => setMenu("contact")}>Connect with me</p>
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
