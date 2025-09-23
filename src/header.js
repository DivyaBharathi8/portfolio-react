import { useState, useEffect } from "react";
import "./assets/style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply if screen width is mobile (<= 767px)
      if (window.innerWidth <= 767) {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // To reset on resize
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="mobile-logo">Portfolio</div>
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
