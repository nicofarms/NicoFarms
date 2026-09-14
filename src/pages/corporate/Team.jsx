import { useMemo, useState } from "react";
import { consultants, team } from "../../data/company";
import "./team.css";
import { useNavigate } from "react-router-dom";

const filters = [
  { label: "All Leadership", value: "all" },
  { label: "Executive", value: "executive" },
  { label: "Operations", value: "operations" },
  { label: "Advisory", value: "advisory" },
];

const getCategory = (member) => {
  const role = member.role.toLowerCase();
  if (role.includes("founder") || role.includes("managing director")) return "executive";
  if (role.includes("manager") || role.includes("nutrition")) return "operations";
  return "advisory";
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const allStaff = useMemo(() => [...team, ...consultants], []);
  const featuredMember = allStaff[0];
  const visibleStaff = allStaff.filter(
    (member) => activeFilter === "all" || getCategory(member) === activeFilter,
  );
  const navigate = useNavigate();

  return (
    <main className="corporate-page">
      <section className="corporate-hero">
        <div className="hero-pattern" />
        <div className="corporate-shell hero-content">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              Institutional Governance &amp; Agronomics
            </div>
            <h1>Corporate Governance &amp; dedicated agro-specialists driving quality since 2020.</h1>
            <p>
              The leadership steering Nico Farms combines strategic business leadership,
              financial discipline, legal guidance and hands-on poultry operations across Ogun
              and Lagos.
            </p>
          </div>
          <div className="registry-card">
            <div className="registry-heading">
              <span>Enterprise Registry</span>
              <span className="registry-check">✓</span>
            </div>
            <div className="registry-row"><span>Established</span><strong>2020</strong></div>
            <div className="registry-row"><span>Business</span><strong>Nico AgriFarms Ltd.</strong></div>
            <div className="registry-row"><span>Operating base</span><strong>Ogun &amp; Lagos</strong></div>
          </div>
        </div>
        <div className="corporate-shell metric-grid">
          <div className="metric"><span>Leadership positions</span><strong>{allStaff.length}</strong><small>Active professionals</small></div>
          <div className="metric"><span>Operating since</span><strong>2020</strong><small>Growing with purpose</small></div>
          <div className="metric"><span>Core focus</span><strong>Quality</strong><small>Animal welfare first</small></div>
          <div className="metric"><span>Primary market</span><strong>Nigeria</strong><small>Serving businesses &amp; homes</small></div>
        </div>
      </section>

      <div className="corporate-shell filter-bar">
        <div className="filter-list">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={activeFilter === filter.value ? "filter active" : "filter"}
              onClick={() => setActiveFilter(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="active-status"><span /> {allStaff.length} professionals in our team</div>
      </div>

      <section className="corporate-shell section-block">
        <div className="section-intro">
          <div>
            <div className="eyebrow">Our Team</div>
            <h2 style={{color: "black"}}>Executive Leadership</h2>
          </div>
          <p>Experienced leaders combining commercial discipline with a practical commitment to responsible Nigerian agriculture.</p>
        </div>

        <article className="featured-profile">
          <div className="featured-image founder-image">
            <img src={featuredMember.image} alt={featuredMember.name} />
            <span className="image-badge">{featuredMember.role}</span>
          </div>
          <div className="featured-content">
            <div className="profile-topline">
              <span className="role-pill">{featuredMember.role}</span>
              <span className="verified">✓ Nico AgriFarms leadership</span>
            </div>
            <h3>{featuredMember.name}</h3>
            <p className="qualification">Founder and principal executive of Nico AgriFarms Limited</p>
            <p>{featuredMember.bio}</p>
            <div className="profile-facts">
              <div><span>Enterprise mandate</span><strong>Responsible growth</strong></div>
              <div><span>Key focus</span><strong>Agri-business scale</strong></div>
              <div><span>Founded</span><strong>2020</strong></div>
            </div>
            <div className="profile-actions">
              <span className="location">⌖ Ogun State / Lagos</span>
              <button className="primary-button" onClick={() => setSelectedMember(featuredMember)} type="button">
                Executive profile <span>→</span>
              </button>
            </div>
          </div>
        </article>

        <div className="staff-grid">
          {visibleStaff.filter((member) => member !== featuredMember).map((member) => (
            <article className="staff-card" key={member.name}>
              <div className={`staff-image ${
                member.name.startsWith("Chinaza")
                  ? "finance-image"
                  : member.name.startsWith("Opeyemi")
                    ? "manager-image"
                    : ""
              }`}>
                <img src={member.image} alt={member.name} />
                <span className="image-badge">{member.role}</span>
              </div>
              <div className="staff-content">
                <h3>{member.name}</h3>
                <div className="staff-role">{member.role}</div>
                <p>{member.bio}</p>
                <div className="staff-footer">
                  <span>● Active</span>
                  <button onClick={() => setSelectedMember(member)} type="button">View profile →</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="corporate-shell architecture-grid">
          <div className="architecture-copy">
            <div className="eyebrow">Institutional Blueprint</div>
            <h2 style={{color: "black"}}>Corporate Architecture &amp; line authority</h2>
            <p>Our leadership structure separates strategic direction, operational delivery and compliance so quality remains visible at every stage of the farm-to-customer journey.</p>
            <div className="principle"><span className="principle-icon">✓</span><div><h3>Animal welfare first</h3><p>Every operational decision protects the welfare of our birds and the quality of our products.</p></div></div>
            <div className="principle"><span className="principle-icon amber">↗</span><div><h3>Independent accountability</h3><p>Legal, finance and operations specialists provide focused oversight as Nico Farms grows.</p></div></div>
          </div>
          <div className="hierarchy-card">
            <div className="hierarchy-heading"><span>Operational team hierarchy</span><strong>Active</strong></div>
            <div className="hierarchy-lead"><span>Executive direction</span><b>Founder &amp; Managing Director</b><i>◆</i></div>
            <div className="hierarchy-columns">
              <div><span>Operations branch</span><h3>Farm Management</h3><p>Daily production, flock care and farm infrastructure.</p></div>
              <div><span>Advisory branch</span><h3>Finance, Legal &amp; Nutrition</h3><p>Specialist guidance for resilient, compliant growth.</p></div>
            </div>
            <div className="hierarchy-bottom"><span>Commercial engine</span><b>Quality products for Nigerian households and businesses</b><i>→</i></div>
          </div>
        </div>
      </section>

      <section className="corporate-shell section-block advisory-section">
        <div className="section-intro">
          <div><div className="eyebrow">Strategic Counsel</div><h2 style={{color: "black"}}>Specialist Advisory Council</h2></div>
          <p>Independent subject-matter expertise supporting operational excellence, financial clarity, regulatory confidence and healthy poultry production.</p>
        </div>
        <div className="advisory-grid">
          {consultants.slice(0, 3).map((member, index) => (
            <article className="advisory-card" key={member.name}>
              <span className="advisory-icon">{["⌁", "◈", "◌"][index]}</span>
              <h3>{member.name}</h3>
              <div className="staff-role">{member.role}</div>
              <p>{member.bio}</p>
              <button onClick={() => setSelectedMember(member)} type="button">View specialist profile →</button>
            </article>
          ))}
        </div>
      </section>

      <section className="standards-section">
        <div className="corporate-shell standards-grid">
          <div><div className="eyebrow light">Operational Safety Culture</div><h2>Responsible standards, from farm to table.</h2><p>Nico Farms is committed to disciplined farming practices, quality assurance and the welfare of the animals in our care.</p></div>
          <div className="standards-list">
            <div>✓ <span>Responsible poultry management</span></div>
            <div>✓ <span>Quality-focused production</span></div>
            <div>✓ <span>Clean and accountable operations</span></div>
            <div>✓ <span>Sustainable farming practices</span></div>
          </div>
        </div>
      </section>

      <section className="corporate-shell join-section">
        <div className="join-card"><div><span className="eyebrow">Join Our Mission</span><h2 style={{color: "black"}}>Build the future of responsible farming.</h2><p>We are building a structured, investor-ready agribusiness and welcome committed people who want to contribute to Nigeria&apos;s food security.</p></div><button className="primary-button" type="button" onClick={()=>navigate('/investors')}>Work with Nico Farms <span>→</span></button></div>
      </section>

      {selectedMember && (
        <div className="profile-modal" onClick={() => setSelectedMember(null)}>
          <div className="profile-dialog" onClick={(event) => event.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedMember(null)} type="button" aria-label="Close profile">×</button>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <div className="dialog-content"><div className="eyebrow">{selectedMember.role}</div><h2>{selectedMember.name}</h2><p>{selectedMember.about || selectedMember.bio}</p><div className="dialog-tags">{selectedMember.specialties?.map((specialty) => <span key={specialty}>{specialty}</span>)}</div></div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Team;
