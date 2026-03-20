import Navbar from "../../components/navbar/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/Footer";
// import ProductCard from "../components/ProductCard";
// import SectionTitle from "../components/SectionTitle";
// import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";

function Home() {
  const [plus, setPlus] = useState(0);

  const img = ["src/assets/images/About.jpg", "src/assets/images/About-2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlus((prev) => (prev === 0 ? 1 : 0))
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Navbar />

      <Hero />

      {/* ABOUT SECTION
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/api/placeholder/600/400"
              alt="Nico Farms"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              About Nico Farms
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2020, Nico Farms is committed to responsible poultry
              farming with a focus on quality products and animal welfare. We
              believe in the power of farming done right, where the welfare of
              our animals and the quality of our products always come first.
            </p>
            <Link to="/about">
              <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      PRODUCTS SECTION
      <section className="px-6 md:px-16 py-20 bg-white">
        <SectionTitle
          title="Our Products"
          subtitle="Quality poultry products from Nico Farms"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
          <ProductCard
            title="Fresh Eggs"
            description="Nutritious farm fresh eggs produced from properly fed and healthy birds. Ideal for households, bakeries, and food vendors."
          />

          <ProductCard
            title="Broiler Chickens"
            description="Healthy broiler chickens raised with best farming practices, ensuring high-quality poultry meat."
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Products →
            </button>
          </Link>
        </div>
      </section>

      WHY CHOOSE US SECTION
      <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle
            title="Why Choose Nico Farms"
            subtitle="What sets us apart in the poultry industry"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6 text-green-600">🥚</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                High Quality Poultry Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Premium eggs and chicken from healthy, well-cared birds raised
                with the highest standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6 text-green-600">🌱</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Responsible Farming Practices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainable methods that prioritize animal welfare and
                environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6 text-green-600">❤️</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Healthy Birds & Nutritious Eggs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proper nutrition and care for superior quality products you can
                trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-6 text-green-600">🤝</div>
              <h3 className="text-xl font-bold text-green-800 mb-4">
                Trusted by Local Businesses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable supplier to restaurants, bakeries, retailers, and food
                service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      SUSTAINABILITY SECTION
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Responsible Farming
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We prioritise animal welfare, balanced nutrition for our birds,
              and sustainable agricultural practices to deliver quality
              products. Our commitment to responsible farming ensures that every
              egg and chicken meets the highest standards of quality and
              nutrition.
            </p>
            <Link to="/sustainability" className="inline-block mt-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">
                Learn More
              </button>
            </Link>
          </div>
          <div>
            <img
              src="/api/placeholder/600/400"
              alt="Sustainable Farming"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      INVESTOR SECTION
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            💼 Investment Opportunity
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Growing Agriculture Opportunities
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Nico Farms continues to expand operations and welcomes investors and
            strategic partners. Join us in building a sustainable future through
            responsible farming.
          </p>
          <Link to="/investors">
            <button className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Partner With Us →
            </button>
          </Link>
        </div>
      </section>

      CONTACT CTA
      <section className="px-6 md:px-16 py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📞 Get in Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Looking for Fresh Eggs or Poultry Supply?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Contact us today to discuss your poultry product needs. We're here
            to serve your business with quality, fresh products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Today
              </button>
            </Link>
            <Link to="/products">
              <button className="bg-white hover:bg-gray-50 text-orange-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border-2 border-orange-600 hover:border-orange-700">
                View Our Products
              </button>
            </Link>
          </div>
        </div>
      </section> */}

      <div className="about-section">
        <h1>About Nico Farms</h1>
        <div className="con-text-img">
          <div className="con-text">
            <p>
              Founded in 2020, Nico Farms is committed to responsible poultry
              farming with a focus on quality products and animal welfare. We
              believe in the power of farming done right, where the welfare of
              our animals and the quality of our products always come first.
            </p>
            <button className="learn-butt">Learn more</button>
          </div>
          <div className="con-img">
            <div className="about-layout"></div>
            <img src={img[plus]} alt="" />
            <div className="carousel-controls">
              <button onClick={() => setPlus(0)}>.</button>
              <button onClick={() => setPlus(1)}>.</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
