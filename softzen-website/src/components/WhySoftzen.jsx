import "../styles/whysoftzen.css";

function WhySoftzen() {
  return (
    <section id="about" className="why-section">
      <p className="why-tag">WHY SOFTZEN</p>

      <h2>Built For Enterprise Scale</h2>

      <div className="why-grid">

        <div className="why-card">
          <h3>AI First</h3>
          <p>Intelligent automation and analytics.</p>
        </div>

        <div className="why-card">
          <h3>Cloud Native</h3>
          <p>Scalable cloud infrastructure.</p>
        </div>

        <div className="why-card">
          <h3>Enterprise Security</h3>
          <p>Secure architecture and compliance.</p>
        </div>

        <div className="why-card">
          <h3>24/7 Reliability</h3>
          <p>High availability and uptime.</p>
        </div>

      </div>
    </section>
  );
}

export default WhySoftzen;