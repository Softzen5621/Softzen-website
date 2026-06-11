import "../styles/global.css";
import worldMap from "../assets/world.svg";


function GlobalPresence() {
const locations = [
  {
    code: "US",
    country: "United States",
    top: "31%",
    left: "22%"
  },
  {
    code: "UK",
    country: "United Kingdom",
    top: "17%",
    left: "49%"
  },
  {
    code: "UAE",
    country: "United Arab Emirates",
    top: "37%",
    left: "66%"
  },
  {
    code: "IND",
    country: "India",
    top: "46%",
    left: "71%"
  },
  {
    code: "SGP",
    country: "Singapore",
    top: "58%",
    left: "79%"
  },
  {
    code: "PH",
    country: "Philippines",
    top: "50%",
    left: "85%"
  },
  {
    code: "AUS",
    country: "Australia",
    top: "81%",
    left: "83%"
  }
];  

  return (
    <section className="global-section">

      <div id="global" className="global-header">

        <p className="global-tag">
          GLOBAL DIGITAL FOOTPRINT
        </p>

        <h2>
          Global Presence.
          <br />
          Local Expertise.
        </h2>

        <p className="global-desc">
          Softzen powers organizations across North America,
          Europe, Middle East and Asia-Pacific through one
          connected enterprise software ecosystem.
        </p>

      </div>

      <div className="world-map-container">

        <img
          src={worldMap}
          alt="Softzen Global Presence"
          className="world-map"
        />
       

        {locations.map((location, index) => (

          <div
            key={index}
            className="map-point"
            style={{
              top: location.top,
              left: location.left
            }}
          >

            <div className="pulse"></div>

            <span className="point-code">
              {location.code}
            </span>

            <div className="tooltip">

              <h4>{location.country}</h4>

              <p>
                Softzen Operations
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default GlobalPresence;