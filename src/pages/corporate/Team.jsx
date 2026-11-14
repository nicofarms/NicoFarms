import { useEffect, useMemo, useState } from "react";
import { consultants, team } from "../../data/company";
import { getStaff } from "../../api/staff";
import "./team.css";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [apiStaff, setApiStaff] = useState(null);
  const [staffError, setStaffError] = useState("");
  const [isLoadingStaff, setIsLoadingStaff] = useState(true);
  const curatedStaff = useMemo(() => [...team, ...consultants], []);
  const allStaff = useMemo(() => {
    if (!apiStaff?.length) return curatedStaff;
    return apiStaff.map((member, index) => ({
      ...member,
      role: member.office || "Staff",
      bio: member.briefIntro || member.detailedIntro || "",
      about: member.detailedIntro || member.briefIntro || "",
      image: member.imageUrl || curatedStaff[index % curatedStaff.length]?.image,
      specialties: [],
    }));
  }, [apiStaff, curatedStaff]);
  const featuredMember = allStaff[0];
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    getStaff()
      .then((staff) => {
        if (active) setApiStaff(staff);
      })
      .catch((error) => {
        if (active) {
          setStaffError(
            error instanceof Error ? error.message : "Team profiles are temporarily unavailable.",
          );
        }
      })
      .finally(() => {
        if (active) setIsLoadingStaff(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="corporate-page">
      <section className="corporate-shell section-block">
        {isLoadingStaff ? (
          <p className="team-loading" role="status">Loading team profiles...</p>
        ) : (
          <>
            {staffError && <p className="team-api-error" role="status">Showing the saved team directory; live profiles could not be loaded.</p>}
            <div className="section-intro">
              <div>
                <div className="eyebrow">Our Team</div>
                <h2 style={{ color: "black" }}>Executive Leadership</h2>
              </div>
              <p>
                Experienced leaders combining commercial discipline with a practical
                commitment to responsible Nigerian agriculture.
              </p>
            </div>

            <article className="featured-profile">
              <div className="featured-image founder-image">
                <img src={featuredMember.image} alt={featuredMember.name} />
                <span className="image-badge">{featuredMember.role}</span>
              </div>
              <div className="featured-content">
                <div className="profile-topline">
                  <span className="role-pill">{featuredMember.role}</span>
                  <span className="verified">
                    <span className="material-symbols-outlined">verified_user</span>
                    Nico AgriFarms Leadership
                  </span>
                </div>
                <h3>{featuredMember.name}</h3>
                <p className="qualification">
                  Founder and principal executive of Nico AgriFarms Limited
                </p>
                <p>{featuredMember.bio}</p>
                <div className="profile-facts">
                  <div>
                    <span>Enterprise mandate</span>
                    <strong>Responsible growth</strong>
                  </div>
                  <div>
                    <span>Key focus</span>
                    <strong>Agri-business scale</strong>
                  </div>
                  <div>
                    <span>Founded</span>
                    <strong>2020</strong>
                  </div>
                </div>
                <div className="profile-actions">
                  <span className="location">
                    <span className="material-symbols-outlined">location_on</span>
                    Lagos HQ / Ejila, Ogun
                  </span>
                  <button
                    className="primary-button"
                    onClick={() => setSelectedMember(featuredMember)}
                    type="button"
                  >
                    Executive profile{" "}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>

            <div className="staff-grid">
              {allStaff
                .filter((member) => member !== featuredMember)
                .map((member) => (
                  <article className="staff-card" key={member.name}>
                    <div
                      className={`staff-image ${
                        member.name.startsWith("Blessing") ? "blessing-image"
                        : member.name.startsWith("Ngozi") ? "ngozi-image"
                        : member.name.startsWith("Chinaza") ? "finance-image"
                        : member.name.startsWith("Opeyemi") ? "manager-image"
                        : member.name.startsWith("Adewole") ? "adewole-image"
                        : ""
                      }`}
                    >
                      <img src={member.image} alt={member.name} />
                      <span className="image-badge">{member.role}</span>
                    </div>
                    <div className="staff-content">
                      <h3>{member.name}</h3>
                      <div className="staff-role">{member.role}</div>
                      <p>{member.bio}</p>
                      <div className="staff-footer">
                        <span>
                          <span className="staff-dot" />
                          Active
                        </span>
                        <button
                          onClick={() => setSelectedMember(member)}
                          type="button"
                        >
                          View profile{" "}
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </>
        )}
      </section>

      <section className="corporate-shell join-section">
        <div className="join-card">
          <div>
            <span className="eyebrow">Join Our Mission</span>
            <h2 style={{ color: "black" }}>
              Build the future of responsible farming.
            </h2>
            <p>
              We are building a structured, investor-ready agribusiness and
              welcome committed people who want to contribute to Nigeria&apos;s
              food security.
            </p>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={() => navigate("/investors")}
          >
            Work with Nico Farms <span>→</span>
          </button>
        </div>
      </section>

      {selectedMember && (
        <div className="profile-modal" onClick={() => setSelectedMember(null)}>
          <div
            className="profile-dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedMember(null)}
              type="button"
              aria-label="Close profile"
            >
              ×
            </button>
            <img src={selectedMember.image} alt={selectedMember.name} />
            <div className="dialog-content">
              <div className="eyebrow">{selectedMember.role}</div>
              <h2 style={{ color: "black" }}>{selectedMember.name}</h2>
              <p>{selectedMember.about || selectedMember.bio}</p>
              <div className="dialog-tags">
                {selectedMember.specialties?.map((specialty) => (
                  <span key={specialty}>{specialty}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Team;
