import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import { Sun, Moon, X, Menu } from "lucide-react";
import { cats } from "../../assets/index.js";

function Navbar({ isLight, setIsLight }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="leftGroup">
        <div className="iconCircle">
          <img src={cats.catIcon} alt="Cat Icon" />
        </div>
        <span>June Kriss Avanzado</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {location.pathname === "/" && (
          <li>
            <a href="#about">About</a>
          </li>
        )}
        {location.pathname === "/" && (
          <li>
            <a href="#projects">Projects</a>
          </li>
        )}
        <li>
          <a href="#footer">Contacts</a>
        </li>
      </ul>
      <div className="navRight">
        <button
          className="modeToggle desktopOnly"
          onClick={() => setIsLight(!isLight)}
        >
          {isLight ? (
            <Moon className="toggleIcon" />
          ) : (
            <Sun className="toggleIcon" />
          )}
        </button>
        <button className="burgerBtn" onClick={() => setMenuOpen(true)}>
          <Menu className="toggleIcon" />
        </button>
      </div>

      <div
        className={`drawerOverlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <button className="modeToggle" onClick={() => setIsLight(!isLight)}>
            {isLight ? (
              <Moon className="toggleIcon" />
            ) : (
              <Sun className="toggleIcon" />
            )}
          </button>
          <button className="drawerClose" onClick={() => setMenuOpen(false)}>
            <X className="toggleIcon" />
          </button>
        </div>
        <ul className="drawer-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          {location.pathname === "/" && (
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
          )}
          {location.pathname === "/" && (
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
          )}
          <li>
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
