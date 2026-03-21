import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">
            About Nico Farms
          </h1>
          <p className="text-gray-600 mt-3">
            Building a sustainable future through responsible farming
          </p>
        </section>

        {/* OUR STORY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Story
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Here at Nico AgriFarms Limited DBA Nico Farms we believe in the
            power of farming done right. Founded in 2020 by Kenneth Geoffrey in
            consultation with his long-time friend and partner Raji Bomodeoku,
            Nico Farms' journey began with a simple but powerful vision: to
            cultivate a farm where the welfare of our animals and the quality of
            our products always come first.
          </p>

          <p className="text-gray-700 leading-relaxed">
            What started as a social project meant to contribute to the
            agriculture sector economy through an SDG program has evolved into a
            comprehensive business venture. Considering the scale of our
            products and our widening customer base, Nico Farms now serves as an
            all-round agriculture enterprise committed to making quality poultry
            products available and affordable to businesses and households
            across Nigeria.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              The mission of Nico Farms is to be an all-round agriculture
              enterprise providing quality poultry products that are accessible
              and affordable to businesses and households in Nigeria. We are not
              only focused on profitability but also on the quality and welfare
              of our animals, workers, and the community we serve.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To cultivate a farm where the welfare of our animals and the
              quality of our products always come first. To strengthen our
              distribution and minimize the cost of farm operations through feed
              production, business expansion, and sales of poultry meat and eggs
              across regions in Nigeria.
            </p>
          </div>
        </section>

        {/* FARM PHILOSOPHY */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Philosophy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nico Farms wants to earn its profit reasonably by employing all
            measures to safeguard lives and maintain quality of its business in
            line with the Sustainable Development Goals. We take conscious
            action in feeding our birds with the right amount of nutrients to
            deliver high-quality and nutritious eggs.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Eggs are generally undifferentiated - the nutrient or quality of an
            egg cannot be measured in plain sight. However, our commitment to
            responsible farming ensures that every product we deliver meets the
            highest standards of quality and nutrition.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
