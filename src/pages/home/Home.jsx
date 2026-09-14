import Navbar from "../../components/navbar/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
// import ProductCard from "../components/ProductCard";
// import SectionTitle from "../components/SectionTitle";
// import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Home() {
  const [plus, setPlus] = useState(0);

  const img = ["/IMG/About.jpg", "/IMG/About-2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlus((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const accordion = [
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

  const [drop, setDrop] = useState(null);

  const dropDown = (index) => {
    setDrop((prev) => (prev === index ? null : index));
  };
  return (
    <>
      <Hero />
      <div className="about-section">
        <h1>About Nico Farms </h1>
        <div className="con-text-img">
          <div className="con-text">
            <p>
              Founded in 2020, Nico Farms is committed to responsible poultry
              farming with a focus on quality products and animal welfare. We 
              believe in the power of farming done right, where the welfare of 
              our animals, members of staffs, and the quality of our products 
              always come first.
            </p>
            <button className="learn-butt">Learn more</button>
          </div>
          <div className="con-img">
            <img src={img[plus]} alt="" />
            <div className="about-layout"></div>
          </div>
          <div className="carousel-controls">
            <button
              onClick={() => setPlus(0)}
              style={{ background: plus === 0 ? "#fda304" : "gray" }}
            >
              .
            </button>
            <button
              onClick={() => setPlus(1)}
              style={{ background: plus === 1 ? "#fda304" : "gray" }}
            >
              .
            </button>
          </div>
        </div>
      </div>

      <section className="products-section">
        <h2>Our Products</h2>

        <div className="products-container">
          <div className="product-card">
            <img src="/IMG/About-2.jpg" alt="Eggs" />
            <h3>Fresh Eggs</h3>
            <p>
              Our fresh eggs are produced daily under hygienic conditions, 
              ensuring high nutritional value and great taste for both households
              and commercial use.
            </p>
            <button onClick={() => navigate("/products")}>View Product</button>
          </div>

          <div className="product-card">
            <img src="/IMG/broiler.jpg" alt="Broilers" />
            <h3>Broilers</h3>
            <p>
              We raise healthy broiler chickens with proper feeding and care,
              providing high-quality meat that meets the needs of homes,
              restaurants, and businesses
            </p>
            <button onClick={() => navigate("/products")}>View Product</button>
          </div>

          <div className="product-card">
            <img src="/IMG/layers.jpg" alt="Layers" />
            <h3>Layers</h3>
            <p>
              Our layers are carefully managed to ensure consistent and
              efficient egg production, giving you a reliable supply of quality
              eggs at all times.
            </p>
            <button onClick={() => navigate("/products")}>View Product</button>
          </div>
        </div>
      </section>
      {/* snk knzdnm, z */}

      <section className="why-choose">
        <h2>Why Choose Us</h2>
        {accordion.map((value, index) => (
          <div className="accord" key={index}>
            <h3 onClick={() => dropDown(index)}>
              {value.title}
              <span>
                <IoIosArrowUp
                  style={{
                    transform:
                      drop === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
              </span>
            </h3>
            {drop === index && <p>{value.content}</p>}
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;


