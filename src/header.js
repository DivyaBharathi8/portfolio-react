import { useState } from "react";
import "./assets/style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="header">
      <nav className={`nav-list ${menuOpen ? "active" : ""}`}>
        <div className="list-items">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
