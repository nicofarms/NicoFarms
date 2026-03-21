import React from "react";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

const Sustainability = () => {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">
            Sustainability at Nico Farms
          </h1>
          <p className="text-gray-600 mt-3">
            Responsible farming practices for a better future
          </p>
        </section>

        {/* ANIMAL WELFARE */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/500/400"
                alt="Animal Welfare"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Animal Welfare
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Nico Farms, animal welfare is our top priority. We ensure
                proper feeding, healthy environments, and disease control
                measures to maintain the well-being of all our birds.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Balanced nutrition with appropriate feed formulations</li>
                <li>• Clean and comfortable living conditions</li>
                <li>• Regular health monitoring and veterinary care</li>
                <li>
                  • Ethical handling practices throughout the production cycle
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SUSTAINABLE FARMING */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Sustainable Farming
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our sustainable farming practices focus on responsible farm
                operations that minimize environmental impact while maximizing
                efficiency and quality.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Cost-efficient feed production to reduce operational
                  expenses
                </li>
                <li>• Resource conservation and waste management</li>
                <li>• Energy-efficient farming techniques</li>
                <li>• Continuous improvement of farming methods</li>
              </ul>
            </div>
            <div>
              <img
                src="/api/placeholder/500/400"
                alt="Sustainable Farming"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* COMMUNITY IMPACT */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/api/placeholder/500/400"
                alt="Community Impact"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Community Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nico Farms is committed to making a positive impact on the
                communities we serve, contributing to local economic development
                and food security.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Employment opportunities for local community members</li>
                <li>• Reliable supply of nutritious food products</li>
                <li>• Agricultural development and knowledge sharing</li>
                <li>• Support for local food vendors and businesses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SDG COMMITMENT */}
        <section className="bg-green-50 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Sustainable Development Goals
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nico Farms aligns its operations with the United Nations
              Sustainable Development Goals, particularly those related to zero
              hunger, good health, decent work, and climate action.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-green-700">
                  SDG 2: Zero Hunger
                </h3>
                <p className="text-sm text-gray-600">
                  Providing nutritious food to communities
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-green-700">
                  SDG 3: Good Health
                </h3>
                <p className="text-sm text-gray-600">
                  Promoting healthy eating through quality products
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-green-700">
                  SDG 8: Decent Work
                </h3>
                <p className="text-sm text-gray-600">
                  Creating employment and fair working conditions
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sustainability;
