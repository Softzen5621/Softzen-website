import "../styles/quantum.css";

function Quantum() {
  return (
    <section className="quantum-section">

      <div className="quantum-left">

        <p className="quantum-tag">
          SOFTZEN QUANTUM™
        </p>

        <h2>
          Enterprise AI
          Intelligence Platform
        </h2>

        <p>
          Build AI copilots, predictive analytics,
          intelligent automation, computer vision,
          enterprise search and LLM powered workflows.
        </p>

        <div className="quantum-features">
          <span>AI Agents</span>
          <span>LLM Integration</span>
          <span>Predictive Analytics</span>
          <span>Computer Vision</span>
          <span>NLP</span>
          <span>Automation</span>
        </div>

      </div>

      <div className="quantum-right">

        <div className="ai-panel">

          <div className="ai-circle"></div>

          <h3>AI Confidence</h3>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

          <div className="ai-stats">
            <div>
              <h4>97%</h4>
              <p>Accuracy</p>
            </div>

            <div>
              <h4>24M+</h4>
              <p>Predictions</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Quantum;