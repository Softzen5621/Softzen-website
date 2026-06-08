import "../styles/companyOverview.css";

function CompanyOverview() {
  return (
    <section className="company-overview">

      <div className="overview-header">
        <p>WHO WE ARE</p>

        <h2>
          Building Technology
          <br />
          That Drives Business Forward
        </h2>

        <span>
          Softzen is a global technology company delivering
          enterprise software, AI platforms, cloud solutions,
          digital transformation services and intelligent
          business systems for organizations worldwide.
        </span>
      </div>

      <div className="overview-stats">

        <div className="stat-card">
          <h3>150K+</h3>
          <p>Users Across Platforms</p>
        </div>

        <div className="stat-card">
          <h3>25+</h3>
          <p>Countries Served</p>
        </div>

        <div className="stat-card">
          <h3>99.99%</h3>
          <p>Platform Uptime</p>
        </div>

        <div className="stat-card">
          <h3>10+</h3>
          <p>Enterprise Platforms</p>
        </div>

      </div>

    </section>
  );
}

export default CompanyOverview;