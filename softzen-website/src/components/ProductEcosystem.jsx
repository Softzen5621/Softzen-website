import "../styles/ecosystem.css";

function ProductEcosystem() {

const products = [


{
  name: "SOFTZEN ONE™",
  title: "Digital Business Operating System",
  price: "Starting at $999/month",
  badge: "FLAGSHIP PLATFORM",
  desc: "Unified command center connecting ERP, AI, CRM, HRMS and analytics into one enterprise workspace.",
  tags: ["Control Center", "SSO", "Analytics", "Governance"],
  featured: true
},

{
  name: "SOFTZEN ATLAS™",
  title: "Enterprise Resource Platform",
  price: "Starting at $2,499/month",
  badge: "ENTERPRISE READY",
  desc: "Finance, procurement, inventory and operational intelligence for modern enterprises.",
  tags: ["Finance", "Operations", "Inventory", "Procurement"]
},

{
  name: "SOFTZEN QUANTUM™",
  title: "Enterprise AI Platform",
  price: "Starting at $1,999/month",
  badge: "AI POWERED",
  desc: "AI copilots, intelligent automation and predictive decision systems.",
  tags: ["AI Agents", "Automation", "Predictions", "Insights"]
},

{
  name: "SOFTZEN ORBIT™",
  title: "Education Operating System",
  price: "Starting at $499/month",
  badge: "EDTECH",
  desc: "Admissions, attendance, examinations and institutional management.",
  tags: ["Admissions", "Attendance", "Exams", "Fees"]
},

{
  name: "SOFTZEN PULSE™",
  title: "Human Capital Suite",
  price: "Starting at $799/month",
  badge: "HRMS",
  desc: "Recruitment, payroll, performance and workforce intelligence.",
  tags: ["Payroll", "HR", "Recruitment", "Performance"]
},

{
  name: "SOFTZEN NEXUS™",
  title: "Customer Relationship Platform",
  price: "Starting at $899/month",
  badge: "CRM",
  desc: "Sales pipelines, customer engagement and service operations.",
  tags: ["CRM", "Sales", "Support", "Marketing"]
},

{
  name: "SOFTZEN VERTEX™",
  title: "Business Intelligence Platform",
  price: "Starting at $1,299/month",
  badge: "ANALYTICS",
  desc: "Executive dashboards, forecasting and real-time analytics.",
  tags: ["Analytics", "KPIs", "Forecasting", "Reports"]
},

{
  name: "SOFTZEN SENTINEL™",
  title: "Cyber Security Platform",
  price: "Contact Sales",
  badge: "SECURITY",
  desc: "Threat intelligence, compliance and enterprise security operations.",
  tags: ["Security", "Compliance", "Audit", "IAM"]
},

{
  name: "SOFTZEN FORGE™",
  title: "Application Development Platform",
  price: "Contact Sales",
  badge: "LOW CODE",
  desc: "Build enterprise applications, workflows and automations faster.",
  tags: ["Apps", "Workflow", "API", "Automation"]
},

{
  name: "SOFTZEN VECTOR™",
  title: "Supply Chain Platform",
  price: "Contact Sales",
  badge: "LOGISTICS",
  desc: "Warehouse, fleet and logistics management at enterprise scale.",
  tags: ["Logistics", "Fleet", "Warehouse", "Tracking"]
}


];

return ( <section id="products" className="ecosystem">


  <div className="section-header">

    <p>SOFTZEN ECOSYSTEM</p>

    <h2>
  10 Enterprise Products.
  <br />
  One Unified Ecosystem.
</h2>
    <span>
      A unified software ecosystem powering operations,
      intelligence, automation and growth for modern organizations.
    </span>

  </div>

  <div id="product" className="ecosystem-grid">

    {products.map((product, index) => (

      <div
        key={index}
        className={
          product.featured
            ? "eco-card featured"
            : "eco-card"
        }
      >

        <div className="product-top">

          <div className="product-badge">
            {product.name}
          </div>

          <div className="product-label">
            {product.badge}
          </div>

        </div>

        <h3>
          {product.title}
        </h3>

        <p>
          {product.desc}
        </p>

        <div className="product-price">
          {product.price}
        </div>

        <div className="tags">

          {product.tags.map((tag, i) => (
            <span key={i}>
              {tag}
            </span>
          ))}

        </div>
<a href="#contact">
       <button  className="product-btn">
  View Platform →
</button></a>

      </div>

    ))}

  </div>

</section>

);
}

export default ProductEcosystem;
