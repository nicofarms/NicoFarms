import "./sustainability.css";

const Sustainability = () => {
  return (
    <main className="sustainability">
      <section className="sustainability-header">
        <div className="sustainability-shell">
          <span className="sustainability-eyebrow">Growing responsibly</span>
          <h1>Sustainability at Nico Farms</h1>
          <p>
            Responsible farming practices that support animal welfare, our
            communities, and a better future.
          </p>
        </div>
      </section>

      <section className="sustain-shell sustain-section">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img src="/IMG/sus-tain.png" alt="Poultry cared for at Nico Farms" />
          </div>

          <div className="sustain-text">
            <span className="sustainability-eyebrow">Care at every stage</span>
            <h2>Animal Welfare</h2>
            <p className="main-text">
              At Nico Farms, animal welfare is our top priority. We ensure
              proper feeding, healthy environments, and disease control.
            </p>

            <ul>
              <li>Balanced nutrition with proper feed</li>
              <li>Clean and comfortable living conditions</li>
              <li>Regular health monitoring</li>
              <li>Ethical handling practices</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sustain-shell sustain-section reverse">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img
              src="/IMG/sustain-able.png"
              alt="Sustainable farming practices"
            />
          </div>

          <div className="sustain-text">
            <span className="sustainability-eyebrow">Using resources wisely</span>
            <h2>Sustainable Farming</h2>
            <p className="main-text">
              Our farming focuses on minimizing environmental impact while
              maintaining efficiency and quality.
            </p>

            <ul>
              <li>Efficient feed production</li>
              <li>Waste management systems</li>
              <li>Energy-efficient operations</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sustain-shell sustain-section">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img
              src="/IMG/sus-tainment.png"
              alt="Nico Farms contributing to the local community"
            />
          </div>

          <div className="sustain-text">
            <span className="sustainability-eyebrow">Stronger communities</span>
            <h2>Community Impact</h2>
            <p className="main-text">
              We contribute to economic development and food security in our
              communities.
            </p>

            <ul>
              <li>Employment opportunities</li>
              <li>Reliable food supply</li>
              <li>Agricultural knowledge sharing</li>
              <li>Support for local businesses</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sustain-shell sdg">
        <div className="sdg-heading">
          <span className="sustainability-eyebrow">Our wider contribution</span>
          <h2>Sustainable Development Goals</h2>
          <p>
            Our work supports global goals for food security, health, and
            decent work.
          </p>
        </div>
        <div className="sdg-grid">
          <article className="sdg-card">
            <span className="sdg-number">02</span>
            <div>
              <h3>Zero Hunger</h3>
              <p>Providing nutritious food</p>
            </div>
          </article>

          <article className="sdg-card">
            <span className="sdg-number">03</span>
            <div>
              <h3>Good Health</h3>
              <p>Promoting healthy living</p>
            </div>
          </article>

          <article className="sdg-card">
            <span className="sdg-number">08</span>
            <div>
              <h3>Decent Work</h3>
              <p>Creating employment</p>
            </div>
          </article>
        </div>
        <p className="sdg-footnote">
          We continue to strengthen our contribution through responsible
          day-to-day farming practices.
        </p>
      </section>
    </main>
  );
};

export default Sustainability;