import { useNavigate } from "react-router-dom";
import "./investor.css";

const investmentHighlights = [
  {
    number: "01",
    title: "Growing poultry market",
    description:
      "Nigeria's poultry sector serves demand from households and businesses across the food industry.",
  },
  {
    number: "02",
    title: "Diverse customer channels",
    description:
      "Our products serve bakeries, restaurants, retailers, and households.",
  },
  {
    number: "03",
    title: "Scalable operations",
    description:
      "Our growth priorities focus on expanding capacity while maintaining quality and efficiency.",
  },
  {
    number: "04",
    title: "Established foundation",
    description:
      "Building on an operating foundation established in 2020.",
  },
];

const growthStages = [
  {
    number: "01",
    title: "Feed production",
    description: "Develop in-house feed production capabilities.",
  },
  {
    number: "02",
    title: "Expand capacity",
    description: "Scale production to support responsible business growth.",
  },
  {
    number: "03",
    title: "Regional distribution",
    description: "Extend distribution to reach more markets across Nigeria.",
  },
  {
    number: "04",
    title: "Product diversification",
    description: "Explore opportunities in processed poultry products.",
  },
];

const partnershipTypes = [
  {
    number: "01",
    title: "Distributors",
    description: "Bring Nico Farms poultry products to customers in your region.",
    action: "Explore distribution",
  },
  {
    number: "02",
    title: "Restaurants & bakeries",
    description: "Build a dependable supply relationship for your business.",
    action: "Discuss supply",
  },
  {
    number: "03",
    title: "Investors",
    description: "Start a conversation about partnering in our growth journey.",
    action: "Discuss partnership",
  },
];

const Investors = () => {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");

  return (
    <main className="investors">
      <section className="investor-hero">
        <div className="investor-shell investor-hero-content">
          <div className="investor-hero-copy">
            <span className="investor-eyebrow">Work with Nico Farms</span>
            <h1>Investment opportunities</h1>
            <p>
              Partner with us to build a responsible, scalable poultry business
              and contribute to the future of Nigerian agriculture.
            </p>
            <button className="investor-primary-button" onClick={goToContact} type="button">
              Explore a partnership <span aria-hidden="true">→</span>
            </button>
          </div>
          <aside className="investor-foundation">
            <span className="foundation-label">Our foundation</span>
            <strong>2020</strong>
            <p>
              Established with a focus on quality poultry products and
              responsible farming.
            </p>
            <span className="foundation-divider" />
            <span className="foundation-footnote">Built for sustainable growth</span>
          </aside>
        </div>
      </section>

      <section className="investor-shell investor-section investor-opportunity">
        <div className="investor-section-heading">
          <span className="investor-eyebrow">The opportunity</span>
          <h2>Why partner with Nico Farms</h2>
          <p>
            A growing market, established customer channels, and clear priorities
            for building the business.
          </p>
        </div>
        <div className="investment-grid">
          {investmentHighlights.map((highlight) => (
            <article className="investment-card" key={highlight.number}>
              <span className="investment-number">{highlight.number}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="investor-roadmap-section">
        <div className="investor-shell investor-section">
          <div className="investor-section-heading">
            <span className="investor-eyebrow">Our growth plan</span>
            <h2>Four priorities. One clear direction.</h2>
            <p>
              Our roadmap focuses on strengthening production and extending
              access to our products.
            </p>
          </div>
          <ol className="growth-roadmap">
            {growthStages.map((stage) => (
              <li className="growth-stage" key={stage.number}>
                <span className="growth-stage-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="investor-shell investor-section investor-partnerships">
        <div className="investor-section-heading">
          <span className="investor-eyebrow">Let’s work together</span>
          <h2>Partnership opportunities</h2>
          <p>
            Whether you distribute, serve, or invest, we welcome a conversation
            about working together.
          </p>
        </div>
        <div className="partnership-grid">
          {partnershipTypes.map((partnership) => (
            <article className="partnership-card" key={partnership.number}>
              <span className="partnership-number">{partnership.number}</span>
              <h3>{partnership.title}</h3>
              <p>{partnership.description}</p>
              <button onClick={goToContact} type="button">
                {partnership.action} <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="investor-shell investor-cta">
        <div>
          <span className="investor-eyebrow">Start a conversation</span>
          <h2>Ready to explore what we can build together?</h2>
          <p>Contact our team to discuss an opportunity with Nico Farms.</p>
        </div>
        <button className="investor-primary-button" onClick={goToContact} type="button">
          Get in touch <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
};

export default Investors;
