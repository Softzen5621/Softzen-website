import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/softzen-removebg-preview.png";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);
const [showSalesModal, setShowSalesModal] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
fullName: "",
company: "",
email: "",
phone: "",
companySize: "",
product: "",
message: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {

 
e.preventDefault();

setLoading(true);

try {

  await fetch(
    "https://script.google.com/macros/s/AKfycbzDj2GbfSLl0cNGmGkMwNqScjMo02MmggYr5mJyUt8PTJmFd6Q2acz-y7v2dXmGEcwM/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData)
    }
  );

  setShowSalesModal(false);
  setShowSuccess(true);

  setFormData({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    companySize: "",
    product: "",
    message: ""
  });

} catch (error) {

  alert(
    "Unable to submit request. Please try again."
  );

}

setLoading(false);
 

};

return (
<> <nav className="navbar">

 
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
        <button
          className="nav-sales-btn"
          onClick={() => {
            setShowSalesModal(true);
            setMenuOpen(false);
          }}
        >
          Talk To Sales
        </button>
      </li>

    </ul>

    <button
      className="demo-btn"
      onClick={() => setShowSalesModal(true)}
    >
      Request Demo
    </button>

    <button
      className="mobile-menu-btn"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </nav>

  {showSalesModal && (

    <div
      className="sales-modal-overlay"
      onClick={() => setShowSalesModal(false)}
    >

      <form
        className="sales-modal"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          type="button"
          className="close-btn"
          onClick={() => setShowSalesModal(false)}
        >
          ✕
        </button>

        <h2>Talk To Sales</h2>

        <p className="sales-subtitle">
          Schedule a consultation with our
          enterprise solutions team.
        </p>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Business Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <select
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          required
        >
          <option value="">
            Company Size
          </option>

          <option value="1-10">
            1-10 Employees
          </option>

          <option value="11-50">
            11-50 Employees
          </option>

          <option value="51-200">
            51-200 Employees
          </option>

          <option value="201-1000">
            201-1000 Employees
          </option>

          <option value="1000+">
            1000+ Employees
          </option>

        </select>

        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
        >
          <option value="">
            Interested Product
          </option>

          <option value="ERP Platform">
            ERP Platform
          </option>

          <option value="CRM">
            CRM
          </option>

          <option value="HRMS">
            HRMS
          </option>

          <option value="Education ERP">
            Education ERP
          </option>

          <option value="Analytics">
            Analytics
          </option>

          <option value="AI Platform">
            AI Platform
          </option>

          <option value="Custom Development">
            Custom Development
          </option>

        </select>

        <textarea
          rows="4"
          name="message"
          placeholder="Tell us about your requirements..."
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={loading}
        >
          {
            loading
              ? "Submitting..."
              : "Request Enterprise Demo"
          }
        </button>

      </form>

    </div>
  )}

  {showSuccess && (

    <div className="success-overlay">

      <div className="success-modal">

        <div className="success-icon">
          ✓
        </div>

        <h3>
          Request Submitted Successfully
        </h3>

        <p>
          Thank you for contacting Softzen.
          Our enterprise solutions team
          will contact you shortly.
        </p>

        <button
          onClick={() => setShowSuccess(false)}
        >
          Continue
        </button>

      </div>

    </div>
  )}

</>
 

);
}

export default Navbar;
