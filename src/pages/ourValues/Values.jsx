import "./values.css"

const Values = () => {
  const values = [
    {
      title: "Quality",
      description:
        "We are committed to delivering high-quality poultry products through proper nutrition, professional farm management, and consistent operational standards.",
      icon: "⭐",
    },
    {
      title: "Animal Welfare",
      description:
        "We believe healthy animals produce better outcomes. We prioritize the welfare, health, safety, and humane treatment of our birds at every stage of production.",
      icon: "🐔",
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to sustainable farming practices that support environmental responsibility, efficient resource management, and long-term agricultural growth.",
      icon: "🌱",
    },
    {
      title: "Integrity",
      description:
        "We conduct our business with honesty, accountability, professionalism, and transparency in all our relationships with customers, staff, suppliers, and stakeholders.",
      icon: "🤝",
    },
    {
      title: "Community Impact",
      description:
        "We are committed to contributing positively to the communities we serve by supporting food accessibility, economic growth, and responsible business practices.",
      icon: "🏘️",
    },
    {
      title: "People & Staff Welfare",
      description:
        "We value the people behind our operations and are committed to creating a safe, respectful, and supportive working environment that promotes staff well-being, growth, and productivity.",
      icon: "👨‍👩‍👧",
    },
  ];

  return (
    <main className="values">
      <section className="values-hero">
        <div className="values-shell">
          <span className="values-eyebrow">What guides us</span>
          <h1>Our values</h1>
          <p>
            The principles behind how we care for our animals, serve our
            communities, and grow Nico Farms.
          </p>
        </div>
      </section>

      <section className="values-shell values-content">
        <div className="values-section-heading">
          <span className="values-eyebrow">Our commitments</span>
          <h2>Principles in practice</h2>
          <p>
            These commitments shape the standards we bring to our work every
            day.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <div className="value-icon" aria-hidden="true">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="values-shell values-commitment">
        <div>
          <span className="values-eyebrow">Our promise</span>
          <h2>Commitment in every decision</h2>
        </div>
        <p>
          At Nico Farms, our values are not just words – they are the foundation
          of our daily operations. We believe that by upholding these
          principles, we create not only quality products but also contribute
          positively to our community and the environment.
        </p>
      </section>
    </main>
  );
};

export default Values;
