import "./about.css";

const About = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-shell about-hero-content">
          <span className="about-eyebrow">The Nico Farms story</span>
          <h1>About Nico Farms</h1>
          <p>Building a sustainable future through responsible farming.</p>
        </div>
      </section>

      <section className="about-shell about-story">
        <div className="about-story-image">
          <img
            src="/IMG/Our_Mission.png"
            alt="Nico Farms mission and beginnings"
          />
        </div>
        <div className="about-story-content">
          <span className="about-eyebrow">Our beginnings</span>
          <h2>Our Story</h2>
          <p>
            Here at Nico AgriFarms Limited DBA Nico Farms we believe in the
            power of farming done right. Founded in 2020 by Kenneth Geoffrey in
            consultation with his long-time friend and partner Raji Bomodeoku,
            Nico Farms&apos; journey began with a simple but powerful vision: to
            cultivate a farm where the welfare of our animals, members of staff,
            and the quality of our products come first.
          </p>
          <p>
            What started as a social project meant to contribute to the
            agriculture sector economy through an SDG program has evolved into a
            comprehensive business venture. Considering the scale of our
            products and our widening customer base, Nico Farms now serves as an
            all-round agriculture enterprise committed to making quality poultry
            products available and affordable to businesses and households
            across Nigeria.
          </p>
        </div>
      </section>

      <section className="about-shell about-purpose">
        <div className="about-section-heading">
          <span className="about-eyebrow">Our direction</span>
          <h2>Mission &amp; vision</h2>
          <p>The purpose we work toward and the future we are building.</p>
        </div>
        <div className="about-purpose-grid">
          <article className="about-purpose-card">
            <span className="about-card-number">OUR MISSION</span>
            <h3>Quality that is accessible</h3>
            <p>
              The mission of Nico Farms is to be an all-round agriculture
              enterprise providing quality poultry products that are accessible
              and affordable to businesses and households in Nigeria. We are not
              only focused on profitability but also on the quality and welfare
              of our animals, workers, and the community we serve.
            </p>
          </article>
          <article className="about-purpose-card vision-card">
            <span className="about-card-number">OUR VISION</span>
            <h3>Responsible growth across Nigeria</h3>
            <p>
              To cultivate a farm where the welfare of our animals, members of
              staff, and the quality of our products come first. To strengthen
              our distribution and minimize the cost of farm operations through
              feed production, business expansion, and sales of poultry meat and
              eggs across regions in Nigeria.
            </p>
          </article>
        </div>
      </section>

      <section className="about-shell about-philosophy">
        <div className="about-philosophy-content">
          <span className="about-eyebrow">How we work</span>
          <h2>Our Philosophy</h2>
          <p>
            Nico Farms wants to earn its profit reasonably by employing all
            measures to safeguard lives and maintain quality of its business in
            line with the Sustainable Development Goals. We take conscious
            action in feeding our birds with the right amount of nutrients to
            deliver high-quality and nutritious eggs.
          </p>
          <p>
            Eggs are generally undifferentiated - the nutrient or quality of an
            egg cannot be measured in plain sight. However, our commitment to
            responsible farming ensures that every product we deliver meets the
            highest standards of quality and nutrition.
          </p>
        </div>
        <div className="about-philosophy-image">
          <img
            src="/IMG/Our_Philosophy.png"
            alt="Nico Farms philosophy of quality and responsible farming"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
