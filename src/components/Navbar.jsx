import React, { useState } from "react";
import { links } from "../data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={`nav ${isActive ? "active" : ""}`}>
      <div className="nav-center">
        <h3>Club Inferno</h3>
        <div className="menu-icon" onClick={() => setIsActive(!isActive)}>
          <FaBars />
        </div>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
