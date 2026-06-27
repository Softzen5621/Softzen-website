import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-top">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            SOFTZEN
          </h2>

          <p>
            Building Enterprise Software For The Future.
            Softzen delivers ERP, AI, CRM, HRMS,
            Analytics, Cyber Security and Industry
            Solutions for organizations worldwide.
          </p>
          <a href="mailto:Enquiry@softzentechnology.com">
          <div className="footer-email">
            ✉ Enquiry@softzentechnology.com
          </div></a>
          <div className="footer-social">

  <div className="footer-social-icons">

    <a
      href="https://www.linkedin.com/company/softzen-technology"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://www.instagram.com/softzentechnology"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

  </div>

</div>

        </div>
        

        {/* PRODUCTS */}

        <div className="footer-column">

          <h3>Products</h3>

          <a href="#contact">SOFTZEN ONE™</a>
          <a href="#contact">SOFTZEN ATLAS™</a>
          <a href="#contact">SOFTZEN QUANTUM™</a>
          <a href="#contact">SOFTZEN NEXUS™</a>
          <a href="#contact">SOFTZEN PULSE™</a>
          <a href="#contact">SOFTZEN ORBIT™</a>
          <a href="#contact">SOFTZEN VERTEX™</a>
          <a href="#contact">SOFTZEN SENTINEL™</a>
          <a href="#contact">SOFTZEN FORGE™</a>
          <a href="#contact">SOFTZEN VECTOR™</a>

        </div>

        {/* SOLUTIONS */}

        <div className="footer-column">

          <h3>Solutions</h3>

          <a href="#contact">Education</a>
          <a href="#contact">Healthcare</a>
          <a href="#contact">Banking & Finance</a>
          <a href="#contact">Manufacturing</a>
          <a href="#contact">Logistics</a>
          <a href="#contact">Retail & Ecommerce</a>
          <a href="#contact">Government</a>
          <a href="#contact">Telecommunications</a>

        </div>

        {/* CONTACT */}

        <div className="footer-column">

          <h3>Contact</h3>

          <a href="mailto:Enquiry@softzentechnology.com">
            Enquiry@softzentechnology.com
          </a>

         <a
  href="#contact"
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Request Demo
</a>

          <a href="#contact">
            Product Consultation
          </a>

          <a href="#contact">
            Enterprise Pricing
          </a>
<a href="#contact">
          <button 
            className="footer-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior:"smooth"
                })
            }
          >
            Contact Sales
          </button>
</a>
        </div>

      </div>

      <div className="footer-bottom">

  <p>
    © 2026 Softzen Technology.
    All Rights Reserved.
  </p>

  <div className="footer-bottom-links">

    <Link to="/privacy-policy">
      Privacy Policy
    </Link>

    <Link to="/terms-of-service">
      Terms Of Service
    </Link>

    <Link to="/security">
      Security
    </Link>

  </div>

</div>
    </footer>
  );
}

export default Footer;