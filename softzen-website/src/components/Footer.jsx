import "../styles/footer.css";

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

          <a href="#contact">
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

          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms Of Service
          </a>

          <a href="#">
            Security
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;