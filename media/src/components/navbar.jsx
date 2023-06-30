import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  

  return (
    <nav className="nav">
      <CustomLink to="../Home" className="nav__brand">View</CustomLink>
      <ul className={active}>
        <li className="nav__item">
        <CustomLink to="../Home" className="nav__link">Home</CustomLink>
        </li>
        <li className="nav__item">
        <CustomLink to="../Blog" className="nav__link">Blog</CustomLink>
        </li>
        <li className="nav__item">
        <CustomLink to="../AboutMe" className="nav__link">AboutMe</CustomLink>
        </li>
        <li className="nav__item">
        <CustomLink to="../Contact" className="nav__link">Contact</CustomLink>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar;