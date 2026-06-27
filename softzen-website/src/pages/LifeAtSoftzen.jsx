import culture from "../assets/culture.png";
import diversity from "../assets/diversity.png";
import identity from "../assets/identity.png";
import fitness from "../assets/fitness.png";
import joiningoffer from "../assets/joiningoffer.png";
import pets from "../assets/pets.png";
import food from "../assets/food.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./LifeAtSoftzen.css";

function LifeAtSoftzen() {
  return (
    <>
      <Navbar />

      <section className="life-page">

        {/* HERO */}

        <div className="life-hero">

          <p id="lifesoftzen" className="life-tag">
            LIFE @ SOFTZEN
          </p>
          <h1>
            Build Technology.
            <br />
            Build Your Future.
            <br />
            Build A Better Life.
          </h1>

          <p className="life-desc">
            At Softzen, we believe great technology is built by
            happy, healthy and empowered people. We invest in
            your career, wellness, family, learning and future.
          </p>

          <div className="life-badges">
            <span>13th Month Pay</span>
            <span>$1500 Learning Fund</span>
            <span>Annual Global Trips</span>
            <span>Global Mobility</span>
            <span>Wellness Support</span>
            <span>Career Growth</span>
          </div>

        </div>

        {/* STATS */}

        <div className="life-stats">

          <div className="stat-card">
            <h2>13th</h2>
            <span>Month Pay</span>
          </div>

          <div className="stat-card">
            <h2>$1500</h2>
            <span>Learning Fund</span>
          </div>

          <div className="stat-card">
            <h2>5+</h2>
            <span>Global Locations</span>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <span>Growth Focused</span>
          </div>

        </div>

        {/* CULTURE */}

        <div className="culture-section">

          <div className="culture-left">

            <span className="section-label">
              GLOBAL CULTURE
            </span>

            <h2>
              Different Cultures.
              Different Perspectives.
              One Purpose.
            </h2>

            <p>
              Softzen brings together talented people from
              different countries, cultures and backgrounds
              to build world-class enterprise technology.
            </p>

          </div>

          <div className="culture-right">
            <img src={culture} alt="culture" />
          </div>

        </div>

        {/* DIVERSITY */}

        <div className="culture-section reverse">

          <div className="culture-left">

            <span className="section-label">
              DIVERSITY & INCLUSION
            </span>

            <h2>
              Every Voice.
              Every Identity.
              Every Person Matters.
            </h2>

            <p>
              We foster a workplace where everyone feels
              respected, valued and empowered to grow.
            </p>

          </div>

          <div className="culture-right">
            <img src={diversity} alt="diversity" />
          </div>

        </div>

        {/* GENDER EQUALITY */}

        <div className="culture-section">

          <div className="culture-left">

            <span className="section-label">
              GENDER EQUALITY
            </span>

            <h2>
              Equal Opportunities.
              Equal Respect.
              Equal Growth.
            </h2>

            <p>
              At Softzen, we are committed to creating
              an inclusive workplace where women, men
              and transgender professionals are valued,
              respected and empowered to thrive. We
              believe diverse perspectives drive stronger
              innovation, collaboration and leadership.
            </p>

          </div>

          <div className="culture-right">
            <img src={identity} alt="gender equality" />
          </div>

        </div>

        {/* FOOD & DINING */}

        <div className="culture-section reverse">

          <div className="culture-left">

            <span className="section-label">
              FOOD & DINING
            </span>

            <h2>
              Great Food.
              Better Energy.
              Stronger Teams.
            </h2>

            <p>
              From healthy daily meals to diverse
              international cuisines, we provide dining
              experiences that support wellbeing,
              productivity and collaboration. Good food
              helps create a positive workplace where
              people can perform at their best.
            </p>

          </div>

          <div className="culture-right">
            <img src={food} alt="food and dining" />
          </div>

        </div>

        {/* PETS */}

        <div className="culture-section">

          <div className="culture-left">

            <span className="section-label">
              PET FRIENDLY
            </span>

            <h2>
              Happy Pets.
              Happy People.
            </h2>

            <p>
              We believe a pet-friendly workplace creates
              happiness, positivity and stronger connections.
            </p>

          </div>

          <div className="culture-right">
            <img src={pets} alt="pets" />
          </div>

        </div>


        {/* WHY SOFTZEN */}

        <div className="life-section">

          <h2>Why People Love Working At Softzen</h2>

          <div className="benefits-grid">

            <div className="benefit-card">13th Month Pay</div>
            <div className="benefit-card">$1500 Learning Fund</div>
            <div className="benefit-card">Annual Global Trips</div>
            <div className="benefit-card">Global Career Mobility</div>
            <div className="benefit-card">Hybrid Work Culture</div>
            <div className="benefit-card">Performance Rewards</div>
            <div className="benefit-card">Child Education Support</div>
            <div className="benefit-card">Healthy food</div>

          </div>

        </div>

        {/* JOINING OFFER */}

        <div className="culture-section">

          <div className="culture-left">

            <span className="section-label">
              YOUR SOFTZEN JOURNEY
            </span>

            <h2>
              Everything You Need.
              Everything To Grow.
              Everything To Succeed.
            </h2>

            <p>
              From day one, you'll receive access to
              learning programs, career mentorship,
              global opportunities, performance rewards,
              wellness initiatives, family support and
              professional development resources that
              help you build a successful long-term career.
            </p>

          </div>

          <div className="culture-right">
            <img src={joiningoffer} alt="joining offer" />
          </div>

        </div>

        {/* WELLNESS HIGHLIGHT */}

        <div className="life-highlight">

          <div className="highlight-content">

            <h2>
              Healthy Minds.
              <br />
              Healthy People.
              <br />
              Stronger Together.
            </h2>

            <p>
              Mental wellness, yoga sessions, fitness support,
              stress management and a culture that truly cares.
            </p>

          </div>

        </div>

        
        {/* CTA */}

        <div className="life-cta">

          <h2>
            We Don't Just Build Technology.
            We Build Exceptional Careers.
          </h2>

          <p>
            Join a global team where innovation, wellbeing,
            learning, leadership and opportunity come together
            to create meaningful impact for organizations
            around the world.
          </p>

          <a
            href="/careers"
            className="life-btn"
          >
            Explore Open Roles
          </a>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default LifeAtSoftzen;
