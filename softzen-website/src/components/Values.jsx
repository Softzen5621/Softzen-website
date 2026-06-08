import "../styles/values.css";

function Values() {

  const values = [
    {
      letter: "S",
      title: "See Opportunities",
      description:
        "Identify possibilities before others and discover untapped potential."
    },
    {
      letter: "O",
      title: "Own The Mission",
      description:
        "Take responsibility, think long-term and act like builders."
    },
    {
      letter: "F",
      title: "Fail Fast",
      description:
        "Learn quickly, adapt rapidly and continuously improve."
    },
    {
      letter: "T",
      title: "Turn Vision Into Reality",
      description:
        "Transform ambitious ideas into measurable business outcomes."
    },
    {
      letter: "Z",
      title: "Zero Distance",
      description:
        "Eliminate barriers between ideas, decisions and execution."
    },
    {
      letter: "E",
      title: "Earn Trust",
      description:
        "Build credibility through transparency, quality and consistency."
    },
    {
      letter: "N",
      title: "Never Stop Building",
      description:
        "Innovation is a mindset. We continuously evolve and improve."
    }
  ];

  return (
    <section className="values">

      <div className="values-header">

        <p>OUR VALUES</p>

        <h2>
          The <span>SOFTZEN</span> Way
        </h2>

        <div className="values-line"></div>

        <span className="values-subtitle">
          The principles that guide every product, decision,
          innovation and customer experience across Softzen.
        </span>

      </div>

      <div className="values-grid">

        {values.map((item, index) => (

          <div
            key={index}
            className="value-card"
          >

            <div className="value-letter">
              {item.letter}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </div>

        ))}

      </div>

      <div className="values-footer">

        <div className="value-footer-card">
          <h4>Code.</h4>
        </div>

        <div className="value-footer-card">
          <h4>Create.</h4>
        </div>

        <div className="value-footer-card">
          <h4>Transform.</h4>
        </div>

      </div>

    </section>
  );
}

export default Values;