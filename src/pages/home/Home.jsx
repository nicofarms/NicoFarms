import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import "./home.css";

const slides = [
  { image: "/IMG/About.jpg", alt: "Poultry farming at Nico Farms" },
  { image: "/IMG/About-2.jpg", alt: "Fresh eggs produced at Nico Farms" },
];

const products = [
  {
    title: "Fresh Eggs",
    image: "/IMG/About-2.jpg",
    alt: "Fresh eggs in a basket",
    description:
      "Our fresh eggs are produced daily under hygienic conditions, ensuring high nutritional value and great taste for both households and commercial use.",
  },
  {
    title: "Broilers",
    image: "/IMG/broiler.jpg",
    alt: "Broiler chickens raised at Nico Farms",
    description:
      "We raise healthy broiler chickens with proper feeding and care, providing high-quality meat that meets the needs of homes, restaurants, and businesses.",
  },
  {
    title: "Layers",
    image: "/IMG/layers.jpg",
    alt: "Laying hens at Nico Farms",
    description:
      "Our layers are carefully managed to ensure consistent and efficient egg production, giving you a reliable supply of quality eggs at all times.",
  },
];

const reasons = [
  {
    title: "High Quality Poultry Products",
    content: "Fresh, healthy, and carefully handled to maintain top quality.",
  },
  {
    title: "Responsible Farming Practices",
    content:
      "Sustainably raised with care for animal welfare, human well-being, and the environment.",
  },
  {
    title: "Healthy Birds & Nutritious Eggs",
    content: "Packed with nutrients for your family's health and wellness.",
  },
  {
    title: "Trusted by Local Businesses",
    content:
      "Supplied to restaurants, supermarkets, and households across the region.",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedReason, setExpandedReason] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Hero />

      <section className="home-shell home-story">
        <div className="home-story-copy">
          <span className="home-eyebrow">Who we are</span>
          <h2>Farming done right, since 2020.</h2>
          <p>
            Nico Farms is committed to responsible poultry farming with a focus
            on quality products, human and animal welfare. We believe in the
            power of farming done right, where the welfare of our animals,
            members of staffs, and the quality of our products always come
            first.
          </p>
          <button
            className="home-primary-button"
            onClick={() => navigate("/about")}
            type="button"
          >
            Discover our story <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="home-story-visual">
          <div className="home-story-image">
            <img src={slides[activeSlide].image} alt={slides[activeSlide].alt} />
          </div>
          <div className="home-story-caption">
            <span>Our commitment</span>
            <strong>Quality, care, and responsible farming</strong>
          </div>
          <div className="home-carousel-controls" aria-label="Choose story image">
            {slides.map((slide, index) => (
              <button
                aria-label={`Show image ${index + 1}: ${slide.alt}`}
                aria-pressed={activeSlide === index}
                className={activeSlide === index ? "active" : ""}
                key={slide.image}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-products-section">
        <div className="home-shell">
          <div className="home-section-heading">
            <span className="home-eyebrow">From our farm</span>
            <h2>Quality poultry products</h2>
            <p>
              Carefully raised and handled products for homes and businesses.
            </p>
          </div>

          <div className="home-products-grid">
            {products.map((product, index) => (
              <article className="home-product-card" key={product.title}>
                <div className="home-product-image">
                  <img src={product.image} alt={product.alt} />
                  <span>0{index + 1}</span>
                </div>
                <div className="home-product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button
                    onClick={() => navigate("/products")}
                    type="button"
                    aria-label={`View ${product.title} products`}
                  >
                    Explore products <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why-section">
        <div className="home-shell home-why-layout">
          <div className="home-section-heading">
            <span className="home-eyebrow">Why Nico Farms</span>
            <h2>Care you can count on</h2>
            <p>
              From the way we care for our birds to how we serve local
              businesses, our standards guide the work we do.
            </p>
            <button
              className="home-text-link"
              onClick={() => navigate("/sustainability")}
              type="button"
            >
              Learn about our approach <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="home-reasons">
            {reasons.map((reason, index) => {
              const isExpanded = expandedReason === index;
              const panelId = `home-reason-${index}`;

              return (
                <article className="home-reason" key={reason.title}>
                  <h3>
                    <button
                      aria-controls={panelId}
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpandedReason(isExpanded ? null : index)
                      }
                      type="button"
                    >
                      <span className="home-reason-number">
                        0{index + 1}
                      </span>
                      {reason.title}
                      <IoIosArrowUp
                        aria-hidden="true"
                        className={isExpanded ? "expanded" : ""}
                      />
                    </button>
                  </h3>
                  <p
                    id={panelId}
                    className="home-reason-content"
                    hidden={!isExpanded}
                  >
                    {reason.content}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-shell home-cta">
          <div>
            <span className="home-eyebrow">Let’s work together</span>
            <h2>Looking for a dependable poultry partner?</h2>
            <p>Talk with our team about supply and partnership opportunities.</p>
          </div>
          <button
            className="home-primary-button"
            onClick={() => navigate("/contact")}
            type="button"
          >
            Contact us <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
