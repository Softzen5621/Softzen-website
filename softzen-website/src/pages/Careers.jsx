import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import "./careers.css";

function Careers() {
  const jobs = [
    {
      title: "Vice President – Enterprise Solutions",
      location: "India",
      department: "Leadership",
      type: "Full Time",
      experience: "12+ Years"
    },
    {
      title: "Country Head",
      location: "Philippines",
      department: "Leadership",
      type: "Full Time",
      experience: "10+ Years"
    },
    {
      title: "Senior Operations Manager",
      location: "Philippines",
      department: "Operations",
      type: "Full Time",
      experience: "8+ Years"
    },
    {
      title: "Vice President – Strategic Partnerships",
      location: "Singapore",
      department: "Leadership",
      type: "Full Time",
      experience: "12+ Years"
    },
    {
      title: "Site Head",
      location: "Singapore",
      department: "Leadership",
      type: "Full Time",
      experience: "10+ Years"
    },
    {
      title: "Regional Director APAC",
      location: "Australia",
      department: "Leadership",
      type: "Full Time",
      experience: "12+ Years"
    },
    {
      title: "Enterprise Project Manager",
      location: "Australia",
      department: "Operations",
      type: "Full Time",
      experience: "8+ Years"
    },
    {
      title: "Chief Product Strategist",
      location: "Remote",
      department: "Product",
      type: "Remote",
      experience: "15+ Years"
    },
    {
      title: "Senior Enterprise Architect",
      location: "Remote",
      department: "Technology",
      type: "Remote",
       experience: "10+ Years"
    }
  ];
  const [search, setSearch] = useState("");
const [location, setLocation] = useState("All Locations");
const [department, setDepartment] = useState("All Departments");

const filteredJobs = jobs.filter((job) => {
const searchTerm = search.toLowerCase();

const matchesSearch =
  job.title.toLowerCase().includes(searchTerm) ||
  job.location.toLowerCase().includes(searchTerm) ||
  job.department.toLowerCase().includes(searchTerm);
  const matchesLocation =
    location === "All Locations" ||
    job.location === location;

  const matchesDepartment =
    department === "All Departments" ||
    job.department === department;

  return (
    matchesSearch &&
    matchesLocation &&
    matchesDepartment
  );
});



  const benefits = [
    "13th Month Pay",
    "$1500 Learning Fund",
    "Performance Bonus",
    "Annual Global Trips",
    "Hybrid Work Model",
    "Wellness Programs",
    "Leadership Development",
    "Global Career Mobility",
    "Gym & Fitness Support",
    "Employee Product Benefits",
    "Education Assistance",
    "Recognition Programs"
  ];

  return (
    <>
      <Navbar />

      <section className="careers-page">

        {/* HERO */}

        <div className="careers-hero">

          <p className="careers-tag">
            BUILD CAREER
          </p>

          <h1>
            Build Technology.
            <br />
            Build Your Future.
          </h1>

          <p className="careers-desc">
            Join a global team building enterprise software,
            AI platforms, analytics systems and digital
            ecosystems powering organizations worldwide.
          </p>

          <div className="hero-highlights">

            <span>13th Month Pay</span>
            <span>$1500 Learning Fund</span>
            <span>Global Mobility</span>
            <span>Leadership Growth</span>

          </div>

        </div>

        {/* STATS */}

        <div className="career-stats">

          <div className="career-stat">
            <h3>13th</h3>
            <span>Month Pay</span>
          </div>

          <div className="career-stat">
            <h3>$1500</h3>
            <span>Learning Fund</span>
          </div>

          <div className="career-stat">
            <h3>5+</h3>
            <span>Hiring Locations</span>
          </div>

          <div className="career-stat">
            <h3>Global</h3>
            <span>Career Growth</span>
          </div>

        </div>

        {/* BANNER */}

        <div className="career-banner">

          <h2>
            Why Top Talent Chooses Softzen
          </h2>

          <p>
            Competitive compensation, 13th month pay,
            global opportunities, leadership development,
            wellness programs and a culture built around
            innovation and growth.
          </p>

        </div>

        {/* BENEFITS */}

        <div className="benefits-section">

          <div className="section-title">
            <h2>Employee Benefits</h2>
            <p>
              Designed to support your growth,
              wellbeing and long-term success.
            </p>
          </div>

          <div className="benefits-grid">

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
              >
                {benefit}
              </div>
            ))}

          </div>

        </div>

        {/* FILTERS */}
<div className="career-filters">

  <input
    type="text"
    placeholder="Search opportunities..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
  />

  <select
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
  >
    <option>All Locations</option>
    <option>India</option>
    <option>Singapore</option>
    <option>Australia</option>
    <option>Philippines</option>
    <option>Remote</option>
  </select>

  <select
    value={department}
    onChange={(e) =>
      setDepartment(e.target.value)
    }
  >
    <option>All Departments</option>
    <option>Leadership</option>
    <option>Operations</option>
    <option>Technology</option>
    <option>Product</option>
  </select>

</div>        {/* JOBS */}

        <div className="section-title">
          <h2>Open Positions</h2>
          <p>
            Explore leadership and enterprise
            opportunities across our global network.
          </p>
        </div>

        <div className="jobs-grid">

          {filteredJobs.map((job, index) => (


            <div
              key={index}
              className="job-card"
            >

              <div className="job-location">
                {job.location}
              </div>

              <h3>
                {job.title}
              </h3>

              <div className="job-meta">

                <span>{job.department}</span>

                <span>{job.type}</span>

                <span>{job.experience}</span>

              </div>

              <a
                href={`mailto:Enquiry@softzentechnology.com?subject=Application - ${job.title}`}
                className="apply-btn"
              >
                Apply Now
              </a>

            </div>

          ))}

         
         {filteredJobs.length === 0 && (
  <div
    style={{
      color: "#94a3b8",
      textAlign: "center",
      gridColumn: "1 / -1",
      padding: "50px"
    }}
  >
    No matching opportunities found.
  </div>
)}

        </div>

        {/* CTA */}

        <div className="career-cta">

          <h2>
            Ready To Shape The Future?
          </h2>

          <p>
            Become part of a team creating enterprise
            technology for organizations worldwide.
          </p>

          <a
            href="mailto:Enquiry@softzentechnology.com"
            className="career-cta-btn"
          >
            Enquiry@softzentechnology.com
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Careers;