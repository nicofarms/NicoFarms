import { useEffect, useMemo, useState } from "react";
import {
  FiArchive,
  FiCheck,
  FiClock,
  FiDownload,
  FiEdit2,
  FiExternalLink,
  FiEye,
  FiFilm,
  FiMail,
  FiPlay,
  FiPlus,
  FiSearch,
  FiSend,
  FiTrash2,
  FiUploadCloud,
  FiUsers,
} from "react-icons/fi";
import farmHeroImage from "../assets/images/HEROPAGE.jpg";

const initialMembers = [
  {
    id: 1,
    name: "Nicolas Vance",
    role: "Master Grower & Founder",
    bio: "Pioneered biodynamic no-till soil regeneration practices at Nico Farms.",
    department: "Leadership",
    status: "Active",
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Livestock & Soil Specialist",
    bio: "Specializes in holistic rotational pasture grazing and biological micro-farming.",
    department: "Soil & Operations",
    status: "Active",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Farm Operations",
    bio: "Manages daily harvest logistics, packaging schedules, and direct-to-market delivery.",
    department: "Soil & Operations",
    status: "Active",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Nursery & Seed Lead",
    bio: "Curator of our heritage seed bank and coordinator of organic seedling production.",
    department: "Leadership",
    status: "Active",
  },
  {
    id: 5,
    name: "Julian Kalu",
    role: "Irrigation & Orchard Steward",
    bio: "Directs micro-drip solar water distribution infrastructure and natural pest care.",
    department: "Soil & Operations",
    status: "Active",
  },
];

const initialSubmissions = [
  {
    id: 1,
    name: "Sarah Jenkins",
    email: "sarah.j@crestline-school.edu",
    organization: "Crestline Elementary School",
    type: "Tour Request",
    category: "Tours",
    received: "Today, 10:15 AM",
    status: "New",
    unread: true,
    message:
      "Hello Nico Farms Team,\n\nWe are planning an outdoor botanical and regenerative agriculture field trip for our 4th-grade cohort (approx. 28 students and 4 chaperones).\n\nWould you have availability for a guided morning walk through the orchard and pumpkin patch?",
  },
  {
    id: 2,
    name: "Green Grocers Co.",
    email: "procurement@greengrocers.example",
    organization: "Green Grocers Co.",
    type: "Wholesale Contract",
    category: "Wholesale",
    received: "Today, 08:42 AM",
    status: "New",
    unread: true,
    message:
      "We are interested in discussing a seasonal wholesale produce agreement. Please send your current availability and pricing information.",
  },
  {
    id: 3,
    name: "Liam O'Connor",
    email: "liamoconnor@example.com",
    organization: "Independent",
    type: "General Question",
    category: "General",
    received: "Yesterday, 3:10 PM",
    status: "Replied",
    unread: false,
    message:
      "Could you tell me more about the soil regeneration practices used on the farm?",
  },
  {
    id: 4,
    name: "Elena Rostova",
    email: "elena.rostova@example.com",
    organization: "Independent",
    type: "Farm Tour Request",
    category: "Tours",
    received: "Oct 24, 11:20 AM",
    status: "Replied",
    unread: false,
    message:
      "I would love to book a tour for a small group of local gardeners. What dates are available?",
  },
  {
    id: 5,
    name: "Marcus Miller",
    email: "chef@artisanmarket.example",
    organization: "Artisan Market",
    type: "Produce Question",
    category: "Wholesale",
    received: "Oct 23, 04:15 PM",
    status: "New",
    unread: true,
    message:
      "Are you currently supplying seasonal greens to local restaurants? We would love to learn more.",
  },
  {
    id: 6,
    name: "Brooke Harrison",
    email: "brooke.h@example.com",
    organization: "Independent",
    type: "General Inquiry",
    category: "General",
    received: "Oct 20, 09:05 AM",
    status: "Archived",
    unread: false,
    message:
      "I have a question about visiting the farm and the products available at the farm stand.",
  },
];

const defaultVideo = {
  url: "https://youtu.be/m9F2_nico_soil2024",
  title: "A Day in the Life at Nico Farms: Organic & Regenerative Cultivation",
  caption:
    "Follow our master soil biologist and lead horticulturists through early morning compost inoculation, zero-till canopy care, and pristine harvest distribution across Sector 4.",
};

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <div className="admin-page-heading">
      <div>
        <p className="admin-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="admin-page-description">{description}</p>
      </div>
      {action}
    </div>
  );
}

function TeamPage() {
  const [members, setMembers] = useState(initialMembers);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  const filteredMembers = useMemo(
    () =>
      members.filter((member) => {
        const matchesFilter = filter === "All" || member.status === filter;
        const text = `${member.name} ${member.role} ${member.bio}`.toLowerCase();
        return matchesFilter && text.includes(query.toLowerCase());
      }),
    [filter, members, query],
  );

  const openForm = (member = null) => {
    setEditing(member);
    setForm(
      member || {
        name: "",
        role: "",
        bio: "",
        department: "Soil & Operations",
        status: "Active",
      },
    );
  };

  const closeForm = () => {
    setEditing(null);
    setForm({});
  };

  const saveMember = (event) => {
    event.preventDefault();
    if (editing) {
      setMembers((current) =>
        current.map((member) =>
          member.id === editing.id ? { ...form, id: editing.id } : member,
        ),
      );
    } else {
      setMembers((current) => [...current, { ...form, id: Date.now() }]);
    }
    closeForm();
  };

  const removeMember = (id) => {
    if (window.confirm("Remove this team member from the preview?")) {
      setMembers((current) => current.filter((member) => member.id !== id));
    }
  };

  const activeCount = members.filter((member) => member.status === "Active").length;

  return (
    <>
      <PageHeading
        eyebrow="Directory hub · public team page"
        title="Team Members"
        description="Manage the team profiles shown on the public Nico Farms website. Changes in this preview are temporary."
        action={
          <button className="admin-button admin-button-primary" onClick={() => openForm()}>
            <FiPlus aria-hidden="true" /> Add team member
          </button>
        }
      />

      <section className="admin-stat-grid" aria-label="Team summary">
        <div className="admin-stat-card"><span>Published staff</span><strong>{activeCount}</strong><small>Active profiles in preview</small></div>
        <div className="admin-stat-card"><span>Soil & operations</span><strong>{members.filter((member) => member.department === "Soil & Operations").length}</strong><small>Field and livestock team</small></div>
        <div className="admin-stat-card"><span>Leadership</span><strong>{members.filter((member) => member.department === "Leadership").length}</strong><small>Founding and leadership team</small></div>
        <div className="admin-stat-card"><span>Display priority</span><strong>Custom</strong><small>Front-end order</small></div>
      </section>

      <section className="admin-panel">
        <div className="admin-toolbar">
          <label className="admin-search">
            <FiSearch aria-hidden="true" />
            <input
              aria-label="Search team members"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, role, or bio..."
              value={query}
            />
          </label>
          <div className="admin-filter-tabs" aria-label="Filter team members">
            {["All", "Active", "Draft"].map((item) => (
              <button
                aria-pressed={filter === item}
                className={filter === item ? "is-selected" : ""}
                key={item}
                onClick={() => setFilter(item)}
              >
                {item} ({item === "All" ? members.length : members.filter((member) => member.status === item).length})
              </button>
            ))}
          </div>
        </div>
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr><th>Rank</th><th>Member</th><th>Role & bio summary</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, index) => (
                <tr key={member.id}>
                  <td><span className="admin-rank">{index + 1}</span></td>
                  <td><strong>{member.name}</strong></td>
                  <td><strong className="admin-table-role">{member.role}</strong><span className="admin-table-bio">{member.bio}</span></td>
                  <td><span className={`admin-status ${member.status === "Active" ? "status-active" : "status-draft"}`}>{member.status}</span></td>
                  <td>
                    <div className="admin-row-actions">
                      <button aria-label={`Edit ${member.name}`} onClick={() => openForm(member)}><FiEdit2 /></button>
                      <button aria-label={`Delete ${member.name}`} onClick={() => removeMember(member.id)}><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredMembers.length === 0 && <tr><td className="admin-empty" colSpan="5">No team members match this search.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="admin-panel-note"><FiUsers aria-hidden="true" /> {activeCount} active profiles in this temporary preview</div>
      </section>

      <div className="admin-notice">
        <span className="admin-notice-icon"><FiEye aria-hidden="true" /></span>
        <div><strong>Live web preview notice</strong><p>These edits only update this browser session; publishing and photo uploads need a connected backend.</p></div>
        <a href="/team" className="admin-button admin-button-light">Open public team page <FiExternalLink /></a>
      </div>

      {form.name !== undefined && (
        <div className="admin-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeForm()}>
          <form aria-label={editing ? "Edit team member" : "Add team member"} className="admin-modal" onSubmit={saveMember}>
            <div className="admin-modal-heading">
              <div><p className="admin-eyebrow">Team directory</p><h2>{editing ? "Edit team member" : "Add team member"}</h2></div>
              <button aria-label="Close dialog" className="admin-icon-button" onClick={closeForm} type="button">×</button>
            </div>
            <label>Full name<input autoFocus onChange={(event) => setForm({ ...form, name: event.target.value })} required value={form.name || ""} /></label>
            <label>Role<input onChange={(event) => setForm({ ...form, role: event.target.value })} required value={form.role || ""} /></label>
            <label>Short biography<textarea onChange={(event) => setForm({ ...form, bio: event.target.value })} rows="4" value={form.bio || ""} /></label>
            <div className="admin-form-row">
              <label>Department<select onChange={(event) => setForm({ ...form, department: event.target.value })} value={form.department || "Soil & Operations"}><option>Soil & Operations</option><option>Leadership</option></select></label>
              <label>Status<select onChange={(event) => setForm({ ...form, status: event.target.value })} value={form.status || "Active"}><option>Active</option><option>Draft</option></select></label>
            </div>
            <div className="admin-modal-actions"><button className="admin-button admin-button-light" onClick={closeForm} type="button">Cancel</button><button className="admin-button admin-button-primary" type="submit">{editing ? "Save changes" : "Add member"}</button></div>
          </form>
        </div>
      )}
    </>
  );
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function ContactsPage() {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedId, setSelectedId] = useState(1);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const selected = submissions.find((item) => item.id === selectedId);
  const unreadCount = submissions.filter((item) => item.unread).length;
  const filtered = submissions.filter((item) => {
    const categoryMatches = category === "All" ||
      (category === "Unread" ? item.unread : item.category === category);
    const searchText = `${item.name} ${item.email} ${item.message}`.toLowerCase();
    return categoryMatches && searchText.includes(query.toLowerCase());
  });

  const updateSubmission = (id, changes) => {
    setSubmissions((current) =>
      current.map((item) => item.id === id ? { ...item, ...changes } : item),
    );
  };

  const selectSubmission = (item) => {
    setSelectedId(item.id);
    if (item.unread) updateSubmission(item.id, { unread: false });
  };

  const exportCsv = () => {
    const header = ["Name", "Email", "Organization", "Type", "Received", "Status", "Message"];
    const rows = filtered.map((item) => [item.name, item.email, item.organization, item.type, item.received, item.status, item.message]);
    const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "nico-farms-contact-submissions.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const filters = ["All", "Unread", "Tours", "Wholesale", "General"];

  return (
    <>
      <PageHeading
        eyebrow="Public inquiries feed"
        title="Contact Submissions"
        description={<>Review the inquiries, tour requests, and messages submitted through the public <a href="/contact">contact form</a>.</>}
        action={
          <div className="admin-heading-actions">
            <span className="admin-response-time"><FiMail /> Response time: <strong>—</strong></span>
            <button className="admin-button admin-button-light" onClick={exportCsv}><FiDownload /> Export CSV</button>
            <button className="admin-button admin-button-primary" onClick={() => setSubmissions((current) => current.map((item) => ({ ...item, unread: false })))}><FiCheck /> Mark all read</button>
          </div>
        }
      />
      <section className="admin-stat-grid" aria-label="Inquiry summary">
        <div className="admin-stat-card"><span>Total volume</span><strong>{submissions.length}</strong><small>Local sample submissions</small></div>
        <div className="admin-stat-card"><span>Awaiting reply</span><strong>{submissions.filter((item) => item.status === "New").length}</strong><small>Sample status only</small></div>
        <div className="admin-stat-card"><span>Tour bookings</span><strong>{submissions.filter((item) => item.category === "Tours").length}</strong><small>Tour inquiries</small></div>
        <div className="admin-stat-card"><span>Wholesale</span><strong>{submissions.filter((item) => item.category === "Wholesale").length}</strong><small>Produce inquiries</small></div>
      </section>
      <section className="admin-inbox-layout">
        <div className="admin-panel admin-inbox-list">
          <div className="admin-toolbar admin-inbox-toolbar">
            <div className="admin-filter-tabs admin-inbox-tabs">
              {filters.map((item) => (
                <button aria-pressed={category === item} className={category === item ? "is-selected" : ""} key={item} onClick={() => setCategory(item)}>
                  {item === "All" ? "All messages" : item} {item === "All" ? `(${submissions.length})` : item === "Unread" ? `(${unreadCount})` : ""}
                </button>
              ))}
            </div>
            <label className="admin-search"><FiSearch aria-hidden="true" /><input aria-label="Search submissions" onChange={(event) => setQuery(event.target.value)} placeholder="Search sender, email, message..." value={query} /></label>
          </div>
          <div className="admin-submission-list">
            {filtered.map((item) => (
              <button aria-current={selectedId === item.id ? "true" : undefined} className={`admin-submission-row${selectedId === item.id ? " is-current" : ""}`} key={item.id} onClick={() => selectSubmission(item)}>
                <span className="admin-avatar">{item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                <span className="admin-submission-person"><strong>{item.name}</strong><small>{item.email}</small></span>
                <span className="admin-submission-type">{item.type}</span>
                <span className="admin-submission-date"><FiClock /> {item.received}</span>
                <span className={`admin-status ${item.status === "New" ? "status-new" : item.status === "Archived" ? "status-archived" : "status-active"}`}>{item.status}</span>
              </button>
            ))}
            {filtered.length === 0 && <p className="admin-empty">No submissions match these filters.</p>}
          </div>
          <div className="admin-list-footer">Showing {filtered.length} of {submissions.length} sample submissions</div>
        </div>
        <aside className="admin-panel admin-contact-detail" aria-label="Submission details">
          {selected ? (
            <>
              <div className="admin-detail-top"><span className={`admin-status ${selected.status === "New" ? "status-new" : "status-active"}`}>{selected.status}</span><span className="admin-detail-type">{selected.type}</span><div className="admin-row-actions">
                <button aria-label={selected.status === "Archived" ? "Restore submission" : "Archive submission"} onClick={() => updateSubmission(selected.id, { status: selected.status === "Archived" ? "New" : "Archived" })}><FiArchive /></button>
                <button aria-label={selected.unread ? "Mark as read" : "Mark as unread"} onClick={() => updateSubmission(selected.id, { unread: !selected.unread })}><FiEye /></button>
              </div></div>
              <div className="admin-contact-person"><span className="admin-avatar admin-avatar-large">{selected.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><h2>{selected.name}</h2><p>{selected.organization}</p><a href={`mailto:${selected.email}`}>{selected.email}</a></div></div>
              <div className="admin-detail-meta"><span><small>Received</small><strong>{selected.received}</strong></span><span><small>Inquiry type</small><strong>{selected.type}</strong></span></div>
              <h3 className="admin-section-label">Inquiry message</h3>
              <p className="admin-message-body">{selected.message}</p>
              <div className="admin-reply-preview"><FiSend /><div><strong>Reply integration not connected</strong><p>Replies cannot be sent from this frontend preview.</p></div></div>
              <button className="admin-button admin-button-light admin-full-button" onClick={() => window.location.href = `mailto:${selected.email}?subject=${encodeURIComponent(`Re: ${selected.type}`)}`}><FiMail /> Open email draft</button>
            </>
          ) : <p className="admin-empty">Select a submission to view its details.</p>}
        </aside>
      </section>
      <div className="admin-notice">
        <span className="admin-notice-icon"><FiMail aria-hidden="true" /></span>
        <div><strong>Sample data only</strong><p>Contact submissions, read status, and archive changes are held in page memory. Connect an API before using real inquiries.</p></div>
        <a href="/contact" className="admin-button admin-button-light">Open contact page <FiExternalLink /></a>
      </div>
    </>
  );
}

const VIDEO_DRAFT_KEY = "nicofarms-admin-video-draft";

function loadVideoDraft() {
  try {
    const saved = window.localStorage.getItem(VIDEO_DRAFT_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (typeof parsed.url !== "string" || typeof parsed.title !== "string" || typeof parsed.caption !== "string") {
      throw new Error("The saved video draft has an unexpected format.");
    }
    return parsed;
  } catch (error) {
    return { error: error instanceof Error ? error.message : "The saved draft could not be read." };
  }
}

function VideoPage() {
  const [draftState] = useState(loadVideoDraft);
  const [video, setVideo] = useState(() =>
    draftState && !draftState.error ? { ...defaultVideo, ...draftState } : defaultVideo,
  );
  const [notice, setNotice] = useState(() =>
    draftState?.error
      ? `Saved draft could not be loaded: ${draftState.error}`
      : draftState
        ? "Restored locally saved draft."
        : "",
  );
  const [fileUrl, setFileUrl] = useState("");
  const captionLength = video.caption.length;

  useEffect(() => () => {
    if (fileUrl) URL.revokeObjectURL(fileUrl);
  }, [fileUrl]);

  const updateVideo = (key, value) => {
    setVideo((current) => ({ ...current, [key]: value }));
  };

  const saveDraft = () => {
    try {
      window.localStorage.setItem(VIDEO_DRAFT_KEY, JSON.stringify(video));
      setNotice("Draft saved in this browser only. It has not been published.");
    } catch (error) {
      setNotice(`Could not save this browser draft: ${error instanceof Error ? error.message : "storage is unavailable."}`);
    }
  };

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["video/mp4", "video/quicktime"].includes(file.type)) {
      setNotice("Choose an MP4 or MOV video file.");
      return;
    }
    setFileUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
    setNotice(`${file.name} is previewed locally; the file has not been uploaded.`);
  };

  const saveAndPublish = () => {
    saveDraft();
    setNotice("Your draft is saved locally. Publishing is not available until a backend is connected.");
  };

  return (
    <>
      <PageHeading
        eyebrow="Content feed / web destination · core narrative"
        title="About Farm Video"
        description="Edit the featured video title, caption, and source for the public About page."
        action={<span className="admin-target-pill">Target: /about#story-video</span>}
      />
      <div className="admin-video-layout">
        <div>
          <section className="admin-panel admin-video-form">
            <div className="admin-card-heading"><h2><FiFilm /> Source media</h2><span className="admin-online-label">Preview only</span></div>
            <label className="admin-field-label">YouTube / media stream URL
              <div className="admin-input-with-action"><input onChange={(event) => updateVideo("url", event.target.value)} placeholder="https://www.youtube.com/watch?v=..." type="url" value={video.url} /><button className="admin-button admin-button-light" onClick={() => setNotice("URL saved in the draft; live video verification requires the backend.")} type="button">Verify URL</button></div>
            </label>
            <div className="admin-or-divider"><span>or upload a local preview</span></div>
            <label className="admin-upload-zone"><FiUploadCloud /><strong>Choose a video to preview</strong><span>MP4 or MOV · local preview only; no upload will occur</span><input accept=".mp4,.mov,video/mp4,video/quicktime" onChange={handleFile} type="file" /></label>
            <label className="admin-field-label">Video title<input maxLength="120" onChange={(event) => updateVideo("title", event.target.value)} value={video.title} /></label>
            <label className="admin-field-label">Short caption / summary<textarea maxLength="280" onChange={(event) => updateVideo("caption", event.target.value)} rows="4" value={video.caption} /></label>
            <div className="admin-char-count">{captionLength} / 280 characters</div>
            {notice && <p className="admin-inline-notice" role="status">{notice}</p>}
            <div className="admin-video-form-actions"><span><FiCheck /> Saved only to this browser</span><button className="admin-button admin-button-light" onClick={saveDraft} type="button">Save draft</button><button className="admin-button admin-button-primary" onClick={saveAndPublish} type="button"><FiUploadCloud /> Save & publish</button></div>
          </section>
          <section className="admin-stat-grid admin-video-stats">
            <div className="admin-stat-card"><span>Video status</span><strong>Preview</strong><small>Not published</small></div>
            <div className="admin-stat-card"><span>CDN status</span><strong>Not connected</strong><small>Backend required</small></div>
            <div className="admin-stat-card"><span>About views</span><strong>—</strong><small>Analytics unavailable</small></div>
          </section>
        </div>
        <aside className="admin-panel admin-video-preview">
          <div className="admin-card-heading"><h2><FiEye /> Live preview</h2><span className="admin-status status-active">Draft preview</span></div>
          <div className="admin-video-player" style={fileUrl ? undefined : { backgroundImage: `linear-gradient(0deg, rgba(10,32,17,.55), rgba(10,32,17,.05)), url('${farmHeroImage}')` }}>
            {fileUrl ? <video controls src={fileUrl} /> : <><span className="admin-video-label"><FiPlay /> Video preview</span><span className="admin-play-icon"><FiPlay /></span></>}
          </div>
          <h3 className="admin-preview-title">{video.title || "Untitled video"}</h3>
          <p className="admin-preview-caption">{video.caption || "Add a short summary to preview it here."}</p>
          <div className="admin-preview-meta"><span><FiClock /> Source not verified</span><span><FiFilm /> Not published</span></div>
          <a className="admin-preview-link" href="/about">Open public About page <FiExternalLink /></a>
        </aside>
      </div>
    </>
  );
}

export { ContactsPage, TeamPage, VideoPage };
