import React from "react";
import h3devLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="p-2 border-b-2 border-black flex justify-between content-center">
      <div className="logo cursor-pointer">
        <img src={h3devLogo} className="h-12" alt="H3Devs Logo" />
      </div>
      <ul className="flex gap-4 cursor-pointer">
        <li className="nav-links">
          <Link to="/#home" onClick={() => scrollToDiv("home")}>Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/#about" onClick={() => scrollToDiv("about")}>
            About
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/#services" onClick={() => scrollToDiv("services")}>
            Services
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/#contact" onClick={() => scrollToDiv("contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
