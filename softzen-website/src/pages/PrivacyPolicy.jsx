import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/legal.css";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="legal-page">

        <div className="legal-container">

          <section className="legal-hero">

            <span className="legal-tag">
              PRIVACY
            </span>

            <h1 className="legal-title">
              Privacy Policy
            </h1>

            <p className="legal-desc">
              Your privacy is important to Softzen Technology.
              This Privacy Policy explains how we collect,
              use, process, store and protect personal
              information across our websites, enterprise
              software, School ERP, APIs and cloud platforms.
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
                <small>Contact</small>
                <strong>Compliance@softzentechnology.com</strong>
              </div>

            </div>

          </section>

          <div className="legal-main">

            <div className="legal-card">


              <h2>
                Information We Collect
              </h2>

              <p>
                We may collect personal, organizational,
                technical and usage information including:
              </p>

              <ul>

                <li>Name & Contact Information</li>

                <li>Organization Details</li>

                <li>School Information</li>

                <li>Student & Staff Records (School ERP)</li>

                <li>Billing Information</li>

                <li>IP Address & Device Information</li>

                <li>Browser & Usage Analytics</li>

                <li>Application Logs</li>

              </ul>

            </div>

            <div className="legal-card">

              <h2>
                How We Use Information
              </h2>

              <ul>

                <li>Provide Software Services</li>

                <li>Maintain Security</li>

                <li>Customer Support</li>

                <li>Platform Improvements</li>

                <li>Billing & Compliance</li>

                <li>Fraud Prevention</li>

              </ul>

            </div>

            <div className="legal-card">

              <h2>
                Data Protection
              </h2>

              <p>

                Softzen follows industry standard
                security practices including encrypted
                communications, secured cloud hosting,
                role based access control, authentication,
                monitoring and backup procedures.

              </p>

              <p>

                Although we implement commercially
                reasonable safeguards, no internet
                transmission or electronic storage
                method is completely secure.

              </p>

            </div>

            <div className="legal-card">

              <h2>
                Data Sharing
              </h2>

              <p>

                We do not sell customer data.

              </p>

              <p>

                Information may only be shared where
                required by law, court order, legal
                process or trusted infrastructure
                providers necessary to operate our
                services.

              </p>

            </div>

            <div className="legal-card">

              <h2>
                Children's Privacy
              </h2>

              <p>

                School ERP data belongs to the
                educational institution.
                Softzen processes student
                information only under the
                direction of authorized schools.

              </p>

            </div>

            <div className="legal-card">

              <h2>
                Contact
              </h2>

              <p>

                Questions regarding this Privacy Policy
                may be sent to:

              </p>

              <strong>

                Compliance@softzentechnology.com

              </strong>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default PrivacyPolicy;