import "./../styles/atlas.css";

function AtlasShowcase() {
  return (
    <section id="atlas" className="atlas-section">

      <div className="atlas-left">
        <p className="atlas-tag">SOFTZEN ATLAS™</p>

        <h2>
          Enterprise ERP Platform
          Built For Scale
        </h2>

        <p className="atlas-desc">
          Unified ERP platform covering Finance,
          HR, CRM, Inventory, Procurement,
          Payroll, Manufacturing and Analytics
          in one intelligent ecosystem.
        </p>

        <div className="atlas-features">

          <div>Finance</div>
          <div>HRMS</div>
          <div>CRM</div>
          <div>Inventory</div>

          <div>Payroll</div>
          <div>Procurement</div>
          <div>Manufacturing</div>
          <div>Analytics</div>

        </div>
      </div>

      <div className="atlas-right">

        <div className="dashboard">

          <div className="dashboard-header">
            <span id="circle1"></span>
            <span id="circle2"></span>
            <span id="circle3"></span>
          </div>

          <div className="dashboard-grid">

            <div className="metric-card">
              <h3>$4.8M</h3>
              <p>Revenue</p>
            </div>

            <div className="metric-card">
              <h3>15.2K</h3>
              <p>Customers</p>
            </div>

            <div className="metric-card">
              <h3>98%</h3>
              <p>Efficiency</p>
            </div>

            <div className="metric-card">
              <h3>+28%</h3>
              <p>Growth</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AtlasShowcase;