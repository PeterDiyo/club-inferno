import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>Club Inferno</h3>
      </div>
      <div className="nav-links">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a key={id} href={href}>
              {text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
