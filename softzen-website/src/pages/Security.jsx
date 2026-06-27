import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

function Security() {
  return (
    <>
      <Navbar />

      <div className="legal-page">

        <div className="legal-container">

          <section className="legal-hero">

            <span className="legal-tag">
              SECURITY
            </span>

            <h1 className="legal-title">
              Security
            </h1>

            <p className="legal-desc">

              Security is built into every Softzen
              platform. We continuously invest in
              infrastructure, monitoring, encryption,
              authentication and operational controls
              to protect customer information.

            </p>

          </section>

          <div className="legal-main">

            <div className="legal-card">

              <h2>
                Infrastructure Security
              </h2>

              <ul>

                <li>Cloud Hosted Infrastructure</li>

                <li>Encrypted HTTPS Connections</li>

                <li>Firewall Protection</li>

                <li>DDoS Protection</li>

                <li>Daily Monitoring</li>

              </ul>

            </div>

            <div className="legal-card">

              <h2>
                Account Security
              </h2>

              <ul>

                <li>Secure Authentication</li>

                <li>Role Based Access</li>

                <li>Password Protection</li>

                <li>Session Security</li>

                <li>Audit Logs</li>

              </ul>

            </div>

            <div className="legal-card">

              <h2>
                Data Protection
              </h2>

              <ul>

                <li>Encrypted Data Transfer</li>

                <li>Regular Backups</li>

                <li>Database Security</li>

                <li>Restricted Internal Access</li>

                <li>Continuous Monitoring</li>

              </ul>

            </div>

            <div className="legal-card">

              <h2>
                Responsible Disclosure
              </h2>

              <p>

                If you discover a security issue,
                vulnerability or suspected breach,
                please report it immediately.

              </p>

              <strong>

                Compliance@softzentechnology.com

              </strong>

            </div>

            <div className="legal-card">

              <h2>
                Security Commitment
              </h2>

              <p>

                While Softzen follows commercially
                accepted security standards,
                customers are also responsible for
                protecting passwords, user devices,
                network security and access to
                authorized accounts.

              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Security;