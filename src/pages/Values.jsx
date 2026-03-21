import React from "react";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

const Values = () => {
  const values = [
    {
      title: "Quality",
      description:
        "We are committed to delivering the highest quality poultry products through meticulous attention to every aspect of our farming process.",
      icon: "⭐",
    },
    {
      title: "Animal Welfare",
      description:
        "The welfare of our animals comes first. We ensure proper care, nutrition, and living conditions for all our birds.",
      icon: "🐔",
    },
    {
      title: "Sustainability",
      description:
        "Our farming practices are designed to be environmentally responsible and economically viable for long-term success.",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices in all our operations.",
      icon: "🤝",
    },
    {
      title: "Community Impact",
      description:
        "We strive to make a positive difference in the communities we serve through employment, food security, and economic development.",
      icon: "🏘️",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Our Values</h1>
          <p className="text-gray-600 mt-3">
            The principles that guide everything we do at Nico Farms
          </p>
        </section>

        {/* VALUES GRID */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COMMITMENT STATEMENT */}
        <section className="mt-16 bg-green-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Nico Farms, our values are not just words – they are the
              foundation of our daily operations. We believe that by upholding
              these principles, we create not only quality products but also
              contribute positively to our community and the environment. Every
              decision we make reflects our dedication to responsible farming
              and sustainable agriculture.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Values;
