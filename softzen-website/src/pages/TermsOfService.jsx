import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

function TermsOfService() {
  return (
    <>
      <Navbar />

      <div className="legal-page">

        <div className="legal-container">

          <section className="legal-hero">

            <span className="legal-tag">
              LEGAL AGREEMENT
            </span>

            <h1 className="legal-title">
              Terms of Service
            </h1>

            <p className="legal-desc">
              Please read these Terms of Service carefully before accessing
              or using any Softzen Technology products, cloud platforms,
              enterprise software, SaaS services, APIs, AI solutions,
              websites or professional services.
              By accessing or using any Softzen service you acknowledge
              that you have read, understood and agreed to these Terms.
            </p>

            <div className="legal-info">

              <div>
                <small>Effective Date</small>
                <strong>27 June 2026</strong>
              </div>

              <div>
                <small>Company</small>
                <strong>Softzen Technology</strong>
              </div>

              <div>
                <small>Jurisdiction</small>
                <strong>India</strong>
              </div>

            </div>

          </section>

          <div className="legal-content">

            <aside className="legal-sidebar">

              <div className="legal-toc">

                <h3>Contents</h3>

                <a href="#acceptance">
                  1. Acceptance
                </a>

                <a href="#services">
                  2. Services
                </a>

                <a href="#accounts">
                  3. Accounts
                </a>

                <a href="#usage">
                  4. Acceptable Use
                </a>

                <a href="#ip">
                  5. Intellectual Property
                </a>

                <a href="#privacy">
                  6. Data & Privacy
                </a>

                <a href="#payment">
                  7. Payments
                </a>

                <a href="#termination">
                  8. Termination
                </a>

                <a href="#liability">
                  9. Liability
                </a>

                <a href="#law">
                  10. Governing Law
                </a>

              </div>

            </aside>

            <main className="legal-main">

              <div
                className="legal-card"
                id="acceptance"
              >

                <h2>
                  1. Acceptance of Terms
                </h2>

                <p>
                  These Terms of Service constitute a legally binding
                  agreement between Softzen Technology ("Softzen",
                  "Company", "we", "our", or "us") and every customer,
                  organization, visitor or authorized user accessing
                  our software, products, applications, APIs,
                  infrastructure, websites or professional services.
                </p>

                <p>
                  By creating an account, accessing our website,
                  purchasing a subscription, requesting implementation,
                  or using any Softzen platform, you acknowledge and
                  agree to comply with these Terms together with our
                  Privacy Policy, Security Policy and any applicable
                  service agreements.
                </p>

                <div className="notice-box">

                  <strong>
                    Important Notice
                  </strong>

                  <p>
                    If you do not agree with these Terms,
                    you must immediately discontinue the use
                    of all Softzen products and services.
                  </p>

                </div>

              </div>

              <div
                className="legal-card"
                id="services"
              >

                <h2>
                  2. Services
                </h2>

                <p>
                  Softzen develops and provides enterprise software,
                  artificial intelligence solutions, cloud platforms,
                  ERP systems, CRM software, HRMS solutions,
                  education ERP platforms, analytics platforms,
                  cybersecurity services, APIs and professional
                  implementation services.
                </p>

                <p>
                  Features may differ depending on the subscription
                  plan, licensing agreement, implementation scope,
                  service availability and future product updates.
                </p>

                <ul>

                  <li>
                    Enterprise ERP Solutions
                  </li>

                  <li>
                    Artificial Intelligence Platforms
                  </li>

                  <li>
                    School ERP Solutions
                  </li>

                  <li>
                    HRMS Platforms
                  </li>

                  <li>
                    CRM Platforms
                  </li>

                  <li>
                    Custom SaaS Development
                  </li>

                  <li>
                    Cloud Infrastructure
                  </li>

                  <li>
                    API Integrations
                  </li>

                </ul>

              </div>

              <div
                className="legal-card"
                id="accounts"
              >

                <h2>
                  3. Account Registration
                </h2>

                <p>
                  Access to certain Softzen services requires
                  registration of an authorized organizational
                  account.
                </p>

                <p>
                  You agree to maintain accurate information,
                  keep your credentials confidential and ensure
                  that only authorized personnel access your account.
                </p>

                <ul>

                  <li>
                    Maintain accurate information.
                  </li>

                  <li>
                    Protect passwords and login credentials.
                  </li>

                  <li>
                    Notify us immediately regarding unauthorized access.
                  </li>

                  <li>
                    You remain responsible for activities under your account.
                  </li>

                </ul>

              </div>

            </main>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default TermsOfService;