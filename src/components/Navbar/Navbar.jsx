import { useState, useEffect } from "react";
import "./Navbar.css";
import catIcon from "../../assets/catIcon.png";
import { Sun, Moon } from "lucide-react";

function Navbar({ isLight, setIsLight }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="leftGroup">
        <div className="iconCircle">
          <img src={catIcon} alt="Cat Icon" />
        </div>
        <span>June Kriss Avanzado</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </ul>
      <button className="modeToggle" onClick={() => setIsLight(!isLight)}>
        {isLight ? (
          <Moon className="toggleIcon" />
        ) : (
          <Sun className="toggleIcon" />
        )}
      </button>
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>
    </nav>
  );
}

export default Navbar;
