import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/softzen-removebg-preview.png";

function Navbar() {
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
          <img  src={logo} alt="Softzen" />

          <div>
            <h2>Softzen</h2>
            <span>AI • ERP • Cloud • Analytics</span>
          </div>
        </Link>
      </div>

      <ul  className="nav-links">

        <li>
          <a href="/#products">
            Product Ecosystem
          </a>
        </li>

        <li>
          <a href="/#industries">
            Industries
          </a>
        </li>

        <li>
          <a href="#company">
            Company
          </a>
        </li>

<li>
  <Link to="/life-at-softzen">
    Life @ Softzen
  </Link>
</li>

        {/* <li>
          <Link to="/careers">
            Life @ Softzen
          </Link>
        </li> */}

        <li>
          <Link to="/careers">
            Careers
          </Link>
        </li>

        <li>
          <a href="#contact">
            Talk To Sales
          </a>
        </li>

      </ul>

      <a href="#contact">
        <button className="demo-btn">
          Request Demo
        </button>
      </a>

    </nav>
  );
}

export default Navbar;