import { useState } from "react";
import "../styles/cta.css";

function CTA() {
const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    companySize: "",
    product: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  setLoading(true);

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbzDj2GbfSLl0cNGmGkMwNqScjMo02MmggYr5mJyUt8PTJmFd6Q2acz-y7v2dXmGEcwM/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(formData)
      }
    );

    setShowSuccess(true);

    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      companySize: "",
      product: "",
      message: ""
    });

  } catch (error) {

    alert(
      "Unable to submit request. Please try again."
    );

  }

  setLoading(false);

};
  return (

    <section
      id="contact"
      className="cta-section"
    >

      <div className="cta-content">

        <div className="cta-left">

          <p className="cta-tag">
            GET IN TOUCH
          </p>

          <h2>
            Ready To Transform
            Your Organization?
          </h2>

          <p className="cta-desc">
            Discuss ERP implementation,
            AI solutions, enterprise software
            development and digital transformation
            initiatives with Softzen.
          </p>

          <div className="cta-info">

            <div>
              ✓ Enterprise ERP Solutions
            </div>

            <div>
              ✓ AI & Automation Platforms
            </div>

            <div>
              ✓ Custom SaaS Development
            </div>

            <div>
              ✓ Cloud Infrastructure
            </div>

            <div>
              ✓ Dedicated Solution Experts
            </div>

            <div>
              ✓ Enterprise Security Standards
            </div>

          </div>

        </div>

        <form
          className="cta-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Business Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value="">
              Company Size
            </option>

            <option value="1-10">
              1-10 Employees
            </option>

            <option value="11-50">
              11-50 Employees
            </option>

            <option value="51-200">
              51-200 Employees
            </option>

            <option value="201-1000">
              201-1000 Employees
            </option>

            <option value="1000+">
              1000+ Employees
            </option>

          </select>

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">
              Interested Product
            </option>

            <option value="ERP Platform">
              ERP Platform
            </option>

            <option value="CRM">
              CRM
            </option>

            <option value="HRMS">
              HRMS
            </option>

            <option value="Education ERP">
              Education ERP
            </option>

            <option value="Analytics">
              Analytics
            </option>

            <option value="AI Platform">
              AI Platform
            </option>

            <option value="Custom Development">
              Custom Development
            </option>

          </select>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Submitting..."
                : "Schedule Consultation"
            }
          </button>

        </form>

      </div>
{showSuccess && (

  <div className="success-overlay">

    <div className="success-modal">

      <div className="success-icon">
        ✓
      </div>

      <h3>
        Request Submitted Successfully
      </h3>

      <p>
        Thank you for contacting Softzen.

        Our enterprise solutions team has
        received your request and will
        reach out shortly to discuss your
        requirements.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
      >
        Continue
      </button>

    </div>

  </div>

)}
    </section>

  );
}

export default CTA;
