import "../styles/technology.css";

function Technology() {

  const tech = [
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "OpenAI"
  ];

  return (
    <section className="tech-section">

      <p className="tech-tag">
        TECHNOLOGY STACK
      </p>

      <h2>
        Modern Technology Foundation
      </h2>

      <div className="tech-grid">

        {tech.map((item,index)=>(
          <div key={index} className="tech-card">
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Technology;
