import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/softzen-removebg-preview.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo-section">

        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none"
          }}
        >
          <img src={logo} alt="Softzen" />

          <div>
            <h2>Softzen</h2>
            <span>AI • ERP • Cloud • Analytics</span>
          </div>

        </Link>

      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <a
            href="/#products"
            onClick={() => setMenuOpen(false)}
          >
            Product Ecosystem
          </a>
        </li>

        <li>
          <a
            href="/#industries"
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </a>
        </li>

        <li>
          <a
            href="#company"
            onClick={() => setMenuOpen(false)}
          >
            Company
          </a>
        </li>

        <li>
          <Link
            to="/life-at-softzen"
            onClick={() => setMenuOpen(false)}
          >
            Life @ Softzen
          </Link>
        </li>

        <li>
          <Link
            to="/careers"
            onClick={() => setMenuOpen(false)}
          >
            Careers
          </Link>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Talk To Sales
          </a>
        </li>

      </ul>

      <a href="#contact">
        <button className="demo-btn">
          Request Demo
        </button>
      </a>

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;