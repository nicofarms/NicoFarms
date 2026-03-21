import React from "react";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

export const products = [
  {
    name: "Fresh Eggs",
    description:
      "Nutritious farm-fresh eggs produced from properly fed and healthy birds. Ideal for households, bakeries, and food vendors.",
  },
  {
    name: "Broiler Chickens",
    description:
      "Healthy broiler chickens raised with best farming practices, ensuring high-quality poultry meat.",
  },
  {
    name: "Future Products",
    description:
      "We are expanding into processed and packaged poultry products to serve a wider market across Nigeria.",
  },
];

function Products() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        <SectionTitle
          title="Our Products"
          subtitle="Quality poultry products from Nico Farms"
        />

        <div className="max-w-6xl mx-auto mt-12">
          {/* FRESH EGGS */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Fresh Eggs"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Fresh Eggs
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Farm fresh eggs produced from properly fed and healthy birds.
                  Our eggs are nutritious and ideal for households, bakeries,
                  restaurants, and food vendors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We take conscious action in feeding our birds with the right
                  amount of nutrients to deliver high-quality and nutritious
                  eggs. While eggs may appear undifferentiated, our commitment
                  to responsible farming ensures superior quality and nutrition.
                </p>
              </div>
            </div>
          </section>

          {/* BROILER CHICKENS */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Broiler Chickens
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Healthy broiler chickens raised with best farming practices,
                  ensuring high-quality poultry meat production.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our broiler birds are raised in optimal conditions with proper
                  nutrition and care, resulting in quality poultry meat that
                  meets the highest standards.
                </p>
              </div>
              <div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Broiler Chickens"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* FUTURE PRODUCTS */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Future Products"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Future Products
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We are expanding into processed and packaged poultry products
                  to serve a wider market across Nigeria.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our expansion plans include processing eggs and chicken into
                  finished and semi-finished products, making our quality
                  poultry products even more accessible to consumers nationwide.
                </p>
              </div>
            </div>
          </section>

          {/* TARGET CUSTOMERS */}
          <section className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Our Customers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-green-700 mb-2">
                  Bakeries & Confectioneries
                </h3>
                <p className="text-gray-600">
                  Fresh eggs for baking and food production
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-green-700 mb-2">
                  Restaurants & Food Vendors
                </h3>
                <p className="text-gray-600">
                  Quality poultry products for food service
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-green-700 mb-2">
                  Households & Retailers
                </h3>
                <p className="text-gray-600">
                  Fresh, nutritious products for everyday use
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Products;
