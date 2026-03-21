import React from "react";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

const Investors = () => {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">
            Investment Opportunities
          </h1>
          <p className="text-gray-600 mt-3">
            Partner with Nico Farms for sustainable agricultural growth
          </p>
        </section>

        {/* WHY INVEST */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Why Invest in Nico Farms
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Growing Poultry Market
                </h3>
                <p className="text-gray-700">
                  Nigeria's poultry industry is expanding rapidly, with
                  increasing demand for quality eggs and chicken products across
                  urban and rural areas.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Expanding Customer Base
                </h3>
                <p className="text-gray-700">
                  Our customer base is growing across bakeries, restaurants,
                  retailers, and households, providing stable and diversified
                  revenue streams.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Scalable Operations
                </h3>
                <p className="text-gray-700">
                  Our farming model is designed for scalability, allowing for
                  expansion while maintaining quality standards and operational
                  efficiency.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Established Foundation
                </h3>
                <p className="text-gray-700">
                  Founded in 2020, we have proven our model and built a
                  reputation for quality and reliability in the market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GROWTH PLAN */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/500/400"
                alt="Growth Plan"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Our Growth Plan
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Feed Production:</strong> Developing in-house feed
                    production capabilities to reduce costs and ensure quality
                    control over bird nutrition.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Business Expansion:</strong> Scaling up production
                    capacity to meet growing demand across Ogun and Lagos
                    states.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Regional Distribution:</strong> Expanding our
                    distribution network to reach more customers across Nigeria.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">•</span>
                  <div>
                    <strong>Product Diversification:</strong> Introducing
                    processed and packaged poultry products to increase market
                    reach and value.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP OPPORTUNITIES */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Partnership Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Distributors
                </h3>
                <p className="text-gray-700 mb-4">
                  Partner with us to distribute our quality poultry products in
                  your region.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Learn More
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Restaurants & Bakeries
                </h3>
                <p className="text-gray-700 mb-4">
                  Reliable supply partnerships for consistent quality
                  ingredients.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Contact Us
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Investors
                </h3>
                <p className="text-gray-700 mb-4">
                  Join our growth journey and be part of Nigeria's agricultural
                  future.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="bg-green-800 text-white p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner with Nico Farms?
            </h2>
            <p className="text-lg mb-6">
              Contact us today to discuss investment opportunities and
              partnership possibilities.
            </p>
            <button className="bg-white text-green-800 px-6 py-3 rounded hover:bg-gray-100 font-semibold">
              Get in Touch
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Investors;
