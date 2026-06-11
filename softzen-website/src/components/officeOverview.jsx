import "../styles/officeOverview.css";
import cultureImage from "../assets/culture.png";
import diversityImage from "../assets/diversity.png";
import foodImage from "../assets/food.png";
import identityImage from "../assets/identity.png";
import petsImage from "../assets/pets.png";
import officerennovationImage from "../assets/office-renovation.png";

function OfficeOverview() {
  return (
    <section className="office-overview">

      <div id="office" className="office-container">

        {/* LEFT */}

        <div className="office-content">

          <p className="office-tag" id="company">
            GLOBAL WORKSPACES
          </p>

          <h2>
            Built For
            
            <br />
            <span>Global Innovation</span>
          </h2>

          <p className="office-description">
            Softzen workspaces are engineered to inspire innovation,
            accelerate collaboration and empower high-performance
            teams across global markets. Every office reflects our
            commitment to excellence, creativity and world-class
            technology delivery.
          </p>

          <div className="office-features">

            <div className="office-feature-card">
              🏢 Modern Workspaces
            </div>

            <div className="office-feature-card">
              🤝 Collaboration Zones
            </div>

            <div className="office-feature-card">
              🚀 Innovation Labs
            </div>

            <div className="office-feature-card">
              🌍 Global Teams
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="office-right">

          <div className="office-image">

            <img
              src={identityImage}
              alt="Softzen Global Office"
            />

            <div className="office-badge badge-top">
              25+ Global Offices
            </div>

            <div className="office-badge badge-bottom">
              150K+ Users Served
            </div>

          </div>

          <div className="office-stats">

            <div className="office-stat-card">
              <h3>25+</h3>
              <span>Global Offices</span>
            </div>

            <div className="office-stat-card">
              <h3>150K+</h3>
              <span>Users Served</span>
            </div>

            <div className="office-stat-card">
              <h3>99.9%</h3>
              <span>Platform Uptime</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OfficeOverview;