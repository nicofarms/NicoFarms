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

const getAdvisoryIcon = (role = "") => {
  const value = role.toLowerCase();
  if (value.includes("legal") || value.includes("complian")) return "policy";
  if (value.includes("financ") || value.includes("account")) return "account_balance";
  if (value.includes("agro") || value.includes("nutrition")) return "agriculture";
  return "workspace_premium";
};

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
            <h1>Corporate Governance &amp; Dedicated Agro-Specialists   Driving Quality Since 2020.</h1>
            <p>
              The leadership steering Nico Farms combines strategic business leadership,
              financial discipline, legal guidance and hands-on poultry operations across Ogun
              and Lagos.
            </p>
          </div>
          <div className="registry-card">
            <div className="registry-heading">
              <span>Enterprise Registry</span>
              <span className="registry-check material-symbols-outlined">verified</span>
            </div>
            <div className="registry-row"><span>Established</span><strong>2020</strong></div>
            <div className="registry-row"><span>Business</span><strong>Nico AgriFarms Ltd.</strong></div>
            <div className="registry-row"><span>Operating Base</span><strong>Ogun &amp; Lagos</strong></div>
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
              <span className="verified"><span className="material-symbols-outlined">verified_user</span>Nico AgriFarms Leadership</span>
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
              <span className="location"><span className="material-symbols-outlined">location_on</span>Lagos HQ / Ejila, Ogun</span>
              <button className="primary-button" onClick={() => setSelectedMember(featuredMember)} type="button">
                Executive profile <span className="material-symbols-outlined">arrow_forward</span>
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
                  <span><span className="staff-dot" />Active</span>
                  <button onClick={() => setSelectedMember(member)} type="button">
                      View profile <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
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
