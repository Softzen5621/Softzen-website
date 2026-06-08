import "../styles/industries.css";

import {
  GraduationCap,
  HeartPulse,
  Landmark,
  Factory,
  Truck,
  ShoppingCart,
  Building2,
  TowerControl
} from "lucide-react";

function Industries() {

  const industries = [
    {
      title: "Education",
      icon: <GraduationCap size={30} />,
      desc: "Student lifecycle, admissions, examinations, learning management and digital campuses."
    },
    {
      title: "Healthcare",
      icon: <HeartPulse size={30} />,
      desc: "Hospital operations, patient workflows, compliance and healthcare intelligence."
    },
    {
      title: "Banking & Finance",
      icon: <Landmark size={30} />,
      desc: "Core finance automation, risk management, treasury and analytics platforms."
    },
    {
      title: "Manufacturing",
      icon: <Factory size={30} />,
      desc: "Production planning, inventory optimization and operational intelligence."
    },
    {
      title: "Logistics",
      icon: <Truck size={30} />,
      desc: "Supply chain visibility, fleet management and warehouse operations."
    },
    {
      title: "Retail & Ecommerce",
      icon: <ShoppingCart size={30} />,
      desc: "Omnichannel commerce, customer intelligence and sales automation."
    },
    {
      title: "Government",
      icon: <Building2 size={30} />,
      desc: "Citizen services, digital governance and public sector transformation."
    },
    {
      title: "Telecommunications",
      icon: <TowerControl size={30} />,
      desc: "Network operations, subscriber management and business analytics."
    }
  ];

  return (
    <section
      id="industries"
      className="industries-section"
    >

      <div className="industries-header">

        <p className="industries-tag">
          INDUSTRY SOLUTIONS
        </p>

        <h2>
          Enterprise Platforms For
          <br />
          Every Major Industry
        </h2>

        <p className="industries-desc">
          Purpose-built software ecosystems engineered
          for digital transformation, operational excellence
          and enterprise-scale growth across global industries.
        </p>

      </div>

      <div className="industries-grid">

        {industries.map((item, index) => (

          <div
            key={index}
            className="industry-card"
          >

            <div className="industry-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <span className="industry-link">
              Learn More →
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Industries;