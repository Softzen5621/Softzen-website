import "../styles/hero.css";

function Hero() {

  const products = [
    {
      name: "ATLAS™",
      category: "Enterprise ERP",
      price: "$2,499/mo",
      feature: "Finance • Inventory"
    },
    {
      name: "QUANTUM™",
      category: "AI Platform",
      price: "$4,999/mo",
      feature: "AI Agents • Automation"
    },
    {
      name: "NEXUS™",
      category: "CRM",
      price: "$1,499/mo",
      feature: "Sales • Customer Success"
    },
    {
      name: "PULSE™",
      category: "HRMS",
      price: "$999/mo",
      feature: "Payroll • Workforce"
    },
    {
      name: "ORBIT™",
      category: "Education ERP",
      price: "$3,493/mo",
      feature: "Admissions • Exams"
    },
    {
      name: "VERTEX™",
      category: "Analytics",
      price: "$2,999/mo",
      feature: "BI • Forecasting"
    },
    {
      name: "SENTINEL™",
      category: "Security",
      price: "Contact Sales",
      feature: "Compliance • Protection"
    },
    {
      name: "FORGE™",
      category: "App Builder",
      price: "$3,499/mo",
      feature: "Low Code • APIs"
    },
    {
      name: "VECTOR™",
      category: "Supply Chain",
      price: "$4,999/mo",
      feature: "Logistics • Tracking"
    }
  ];

  return (
    <section className="hero">

      <div className="hero-left">

        <p className="tag">
          SOFTZEN ONE™ ECOSYSTEM
        </p>

        <h1>
          One Platform.
          <br />
          <span>Powering Modern Organizations.</span>
        </h1>

        <p className="description">
          Softzen unifies ERP, AI, CRM, HRMS,
          Education, Analytics, Security and
          Supply Chain operations through one
          connected enterprise ecosystem designed
          to scale with growing organizations.
        </p>

        <div className="hero-buttons">

          <a href="#product" ><button className="primary-btn">
            Explore Products
          </button></a>

        <a href="#contact">  <button className="secondary-btn">
            Schedule Demo
          </button>
</a>
        </div>
        <div className="hero-features">

  <div>✓ ERP Platform</div>

  <div>✓ AI Automation</div>

  <div>✓ CRM Suite</div>

  <div>✓ Enterprise Security</div>

</div>

        {/* <div className="hero-stats">

          <div className="hero-stat">
            <h3>150K+</h3>
            <span>Users</span>
          </div>

          <div className="hero-stat">
            <h3>25+</h3>
            <span>Countries</span>
          </div>

          <div className="hero-stat">
            <h3>10</h3>
            <span>Products</span>
          </div>

          <div className="hero-stat">
            <h3>99.99%</h3>
            <span>Uptime</span>
          </div>

        </div> */}

      </div>

      <div className="hero-right">

        <div className="ecosystem-panel">

          <div className="featured-badge">
            ENTERPRISE SUITE
          </div>

          <div className="ecosystem-header">

            <h3>
              SOFTZEN ONE™
            </h3>

            <p>
              ERP • AI • CRM • HRMS • Analytics • Security
            </p>

          </div>

         

          {/* <div className="one-description">
            The Enterprise Operating System connecting
            all Softzen platforms through one unified
            experience, identity layer and data ecosystem.
          </div> */}

          {/* <div className="one-highlights">

            <span>Enterprise Resource Planning</span>
            <span>AI</span>
            <span>CRM</span>
            <span>HRMS</span>
            <span>Analytics</span>
            <span>Security</span>
            
          </div> */}
{/* 
          <div className="one-stats">

            <div>
              <h4>10</h4>
              <span>Products</span>
            </div>

            <div>
              <h4>150K+</h4>
              <span>Users</span>
            </div>

            <div>
              <h4>25+</h4>
              <span>Countries</span>
            </div>

          </div> */}

          <div className="one-value">
            Starting from $999/month • Scale to Enterprise
          </div>

          <div className="products-grid">

            {products.map((product, index) => (

              <div
                className="product-card"
                key={index}
              >

                <h4>{product.name}</h4>

                <p>{product.category}</p>

                <small>{product.feature}</small>

                <span>{product.price}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="hero-trust">

        <span>10 Enterprise Products</span>

        <span>Cloud Native</span>

        <span>AI Powered</span>

        <span>Enterprise Security</span>

        <span>99.99% Uptime</span>

        <span>Multi-Tenant SaaS</span>

      </div>

    </section>
  );
}

export default Hero;