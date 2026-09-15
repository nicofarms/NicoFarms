import "./sustainability.css"

const Sustainability = () => {
  return (
    <main className="sustainability">

      {/* HEADER */}
      <section className="sustainability-header">
        <h1>Sustainability at Nico Farms</h1>
        <p>Responsible farming practices for a better future</p>
      </section>

      {/* ANIMAL WELFARE */}
      <section className="sustain-section">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img src="/IMG/sus-tain.png" />
          </div>

          <div className="sustain-text">
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

      {/* SUSTAINABLE FARMING */}
      <section className="sustain-section reverse">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img src="/IMG/sustain-able.png" />
          </div>

          <div className="sustain-text">
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

      {/* COMMUNITY IMPACT */}
      <section className="sustain-section">
        <div className="sustain-grid">
          <div className="sustain-image">
            <img src="/IMG/sus-tainment.png" />
          </div>

          <div className="sustain-text">
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

      {/* SDG */}
      <section className="sdg">
        <h2>Sustainable Development Goals</h2>
        <p>
          We align with global goals including zero hunger, good health,
          decent work, and climate action.
        </p>

        <div className="sdg-grid">
          <div className="sdg-card">
            <h3>SDG 2: Zero Hunger</h3>
            <p>Providing nutritious food</p>
          </div>

          <div className="sdg-card">
            <h3>SDG 3: Good Health</h3>
            <p>Promoting healthy living</p>
          </div>

          <div className="sdg-card">
            <h3>SDG 8: Decent Work</h3>
            <p>Creating employment</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Sustainability;