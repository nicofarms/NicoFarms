import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FiDownload,
  FiEdit2,
  FiExternalLink,
  FiEye,
  FiFilm,
  FiMail,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";
import {
  getContactMessages,
} from "../api/contacts";
import {
  createStaffMember,
  deleteStaffMember,
  getStaff,
  updateStaffMember,
} from "../api/staff";
import {
  createVideo,
  getVideos,
  getYoutubeEmbedUrl,
  updateVideo,
} from "../api/videos";
import { useAdminAuth } from "./useAdminAuth";

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
  const { token } = useAdminAuth();
  const [members, setMembers] = useState([]);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const loadMembers = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      setMembers(await getStaff());
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Could not load team members.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMembers();
  }, [loadMembers]);

  const filteredMembers = useMemo(() => {
    const search = query.trim().toLowerCase();
    return members.filter((member) =>
      `${member.name} ${member.office || ""} ${member.briefIntro || ""}`
        .toLowerCase()
        .includes(search),
    );
  }, [members, query]);

  const openForm = (member = null) => {
    setEditing(member);
    setForm(
      member
        ? {
            name: member.name || "",
            office: member.office || "",
            briefIntro: member.briefIntro || "",
            detailedIntro: member.detailedIntro || "",
            imageUrl: member.imageUrl || "",
          }
        : {
        name: "",
        office: "",
        briefIntro: "",
        detailedIntro: "",
        imageUrl: "",
      },
    );
  };

  const closeForm = () => {
    setEditing(null);
    setForm({});
  };

  const saveMember = async (event) => {
    event.preventDefault();
    if (isSaving) return;

    setIsSaving(true);
    setError("");
    const member = {
      name: form.name.trim(),
      office: form.office.trim(),
      briefIntro: form.briefIntro.trim(),
      detailedIntro: form.detailedIntro.trim(),
      imageUrl: form.imageUrl.trim(),
    };

    try {
      if (editing) {
        await updateStaffMember(editing._id, member, token);
      } else {
        await createStaffMember(member, token);
      }
      await loadMembers();
      closeForm();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Could not save this team member.");
    } finally {
      setIsSaving(false);
    }
  };

  const removeMember = async (member) => {
    if (!window.confirm(`Delete ${member.name} from the team?`)) return;
    setError("");
    try {
      await deleteStaffMember(member._id, token);
      await loadMembers();
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "Could not delete this team member.");
    }
  };

  return (
    <>
      <PageHeading
        eyebrow="Directory hub · public team page"
        title="Team Members"
        description="Manage staff profiles displayed on the public Nico Farms website."
        action={
          <button className="admin-button admin-button-primary" disabled={isLoading} onClick={() => openForm()}>
            <FiPlus aria-hidden="true" /> Add team member
          </button>
        }
      />

      <section className="admin-stat-grid" aria-label="Team summary">
        <div className="admin-stat-card"><span>Staff profiles</span><strong>{members.length}</strong><small>Connected to the staff API</small></div>
        <div className="admin-stat-card"><span>With role</span><strong>{members.filter((member) => member.office).length}</strong><small>Office or position set</small></div>
        <div className="admin-stat-card"><span>With photo</span><strong>{members.filter((member) => member.imageUrl).length}</strong><small>Image URL provided</small></div>
        <div className="admin-stat-card"><span>Directory</span><strong>Live</strong><small>Changes publish immediately</small></div>
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
        </div>
        {error && <p className="admin-api-error" role="alert">{error}</p>}
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr><th>#</th><th>Member</th><th>Role & introduction</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td className="admin-empty" colSpan="4">Loading team members...</td></tr>
              ) : filteredMembers.map((member, index) => (
                <tr key={member._id}>
                  <td><span className="admin-rank">{index + 1}</span></td>
                  <td><strong>{member.name}</strong></td>
                  <td><strong className="admin-table-role">{member.office || "Staff"}</strong><span className="admin-table-bio">{member.briefIntro || member.detailedIntro || "No introduction provided."}</span></td>
                  <td>
                    <div className="admin-row-actions">
                      <button aria-label={`Edit ${member.name}`} onClick={() => openForm(member)}><FiEdit2 /></button>
                      <button aria-label={`Delete ${member.name}`} onClick={() => removeMember(member)}><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {!isLoading && filteredMembers.length === 0 && <tr><td className="admin-empty" colSpan="4">{members.length ? "No team members match this search." : "No staff profiles yet. Add one to publish it."}</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="admin-panel-note"><FiUsers aria-hidden="true" /> Changes are saved to the backend and appear on the public team page.</div>
      </section>

      <div className="admin-notice">
        <span className="admin-notice-icon"><FiEye aria-hidden="true" /></span>
        <div><strong>Public directory</strong><p>Staff profiles are managed through the connected API. Add a hosted image URL to include a profile photo.</p></div>
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
            <label>Role / office<input onChange={(event) => setForm({ ...form, office: event.target.value })} value={form.office || ""} /></label>
            <label>Short introduction<textarea onChange={(event) => setForm({ ...form, briefIntro: event.target.value })} rows="3" value={form.briefIntro || ""} /></label>
            <label>Full biography<textarea onChange={(event) => setForm({ ...form, detailedIntro: event.target.value })} rows="5" value={form.detailedIntro || ""} /></label>
            <label>Photo URL<input onChange={(event) => setForm({ ...form, imageUrl: event.target.value })} type="url" value={form.imageUrl || ""} /></label>
            <div className="admin-modal-actions"><button className="admin-button admin-button-light" disabled={isSaving} onClick={closeForm} type="button">Cancel</button><button className="admin-button admin-button-primary" disabled={isSaving} type="submit">{isSaving ? "Saving..." : editing ? "Save changes" : "Add member"}</button></div>
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
  const { token } = useAdminAuth();
  const [submissions, setSubmissions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSubmissions = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const contacts = await getContactMessages(token);
      const normalized = contacts.map((contact, index) => {
        const receivedAt = contact.createdAt || contact.created_at;
        const id = contact._id || contact.id || `${contact.email || "contact"}-${index}`;
        return {
          id,
          name: contact.name || "Website visitor",
          email: contact.email || "",
          phone: contact.phone || "",
          type: contact.subject || "General enquiry",
          received: receivedAt
            ? new Date(receivedAt).toLocaleString()
            : "Date unavailable",
          message: contact.message || "",
        };
      });
      setSubmissions(normalized);
      setSelectedId((current) =>
        normalized.some((item) => item.id === current)
          ? current
          : normalized[0]?.id || null,
      );
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Could not load contact messages.");
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadSubmissions();
  }, [loadSubmissions]);

  const selected = submissions.find((item) => item.id === selectedId);
  const filtered = submissions.filter((item) => {
    const searchText = `${item.name} ${item.email} ${item.phone} ${item.type} ${item.message}`.toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  const exportCsv = () => {
    const header = ["Name", "Email", "Phone", "Subject", "Received", "Message"];
    const rows = filtered.map((item) => [item.name, item.email, item.phone, item.type, item.received, item.message]);
    const csv = [header, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "nico-farms-contact-submissions.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeading
        eyebrow="Public inquiries feed"
        title="Contact Submissions"
        description={<>Review messages submitted through the public <a href="/contact">contact form</a>.</>}
        action={
          <div className="admin-heading-actions">
            <button className="admin-button admin-button-light" disabled={isLoading || submissions.length === 0} onClick={exportCsv}><FiDownload /> Export CSV</button>
            <button className="admin-button admin-button-primary" disabled={isLoading} onClick={loadSubmissions}>Refresh</button>
          </div>
        }
      />
      <section className="admin-stat-grid" aria-label="Inquiry summary">
        <div className="admin-stat-card"><span>Total messages</span><strong>{submissions.length}</strong><small>Live contact records</small></div>
        <div className="admin-stat-card"><span>With phone</span><strong>{submissions.filter((item) => item.phone).length}</strong><small>Phone number provided</small></div>
        <div className="admin-stat-card"><span>With subject</span><strong>{submissions.filter((item) => item.type !== "General enquiry").length}</strong><small>Subject provided</small></div>
        <div className="admin-stat-card"><span>Inbox</span><strong>Live</strong><small>Read-only API access</small></div>
      </section>
      <section className="admin-inbox-layout">
        <div className="admin-panel admin-inbox-list">
          <div className="admin-toolbar admin-inbox-toolbar">
            <label className="admin-search"><FiSearch aria-hidden="true" /><input aria-label="Search submissions" onChange={(event) => setQuery(event.target.value)} placeholder="Search sender, email, message..." value={query} /></label>
          </div>
          {error && <p className="admin-api-error" role="alert">{error}</p>}
          <div className="admin-submission-list">
            {isLoading ? <p className="admin-empty">Loading contact messages...</p> : filtered.map((item) => (
              <button aria-current={selectedId === item.id ? "true" : undefined} className={`admin-submission-row${selectedId === item.id ? " is-current" : ""}`} key={item.id} onClick={() => setSelectedId(item.id)}>
                <span className="admin-avatar">{item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                <span className="admin-submission-person"><strong>{item.name}</strong><small>{item.email}</small></span>
                <span className="admin-submission-type">{item.type}</span>
                <span className="admin-submission-date">{item.received}</span>
                <span className="admin-status status-active">Received</span>
              </button>
            ))}
            {!isLoading && !error && filtered.length === 0 && <p className="admin-empty">{submissions.length ? "No messages match your search." : "No contact messages have been submitted yet."}</p>}
          </div>
          <div className="admin-list-footer">Showing {filtered.length} of {submissions.length} messages</div>
        </div>
        <aside className="admin-panel admin-contact-detail" aria-label="Submission details">
          {selected ? (
            <>
              <div className="admin-detail-top"><span className="admin-status status-active">Received</span><span className="admin-detail-type">{selected.type}</span></div>
              <div className="admin-contact-person"><span className="admin-avatar admin-avatar-large">{selected.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><h2>{selected.name}</h2>{selected.email && <a href={`mailto:${selected.email}`}>{selected.email}</a>}{selected.phone && <p>{selected.phone}</p>}</div></div>
              <div className="admin-detail-meta"><span><small>Received</small><strong>{selected.received}</strong></span><span><small>Subject</small><strong>{selected.type}</strong></span></div>
              <h3 className="admin-section-label">Inquiry message</h3>
              <p className="admin-message-body">{selected.message}</p>
              {selected.email && <a className="admin-button admin-button-light admin-full-button" href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: ${selected.type}`)}`}><FiMail /> Reply by email</a>}
            </>
          ) : <p className="admin-empty">{isLoading ? "Loading contact message..." : error ? "Messages could not be loaded." : "Select a message to view its details."}</p>}
        </aside>
      </section>
      <div className="admin-notice">
        <span className="admin-notice-icon"><FiMail aria-hidden="true" /></span>
        <div><strong>Connected inbox</strong><p>Messages are loaded from the API. The current backend supports viewing messages; read state, archive, and reply actions are not available.</p></div>
        <a href="/contact" className="admin-button admin-button-light">Open contact page <FiExternalLink /></a>
      </div>
    </>
  );
}

function VideoPage() {
  const { token } = useAdminAuth();
  const [videos, setVideos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", youtubeUrl: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadVideos = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await getVideos();
      setVideos(result);
      setSelectedId((current) =>
        result.some((video) => video._id === current)
          ? current
          : result[0]?._id || null,
      );
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Could not load videos.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const selected = videos.find((video) => video._id === selectedId);

  const startNewVideo = () => {
    setEditing(null);
    setForm({ title: "", youtubeUrl: "" });
    setNotice("");
  };

  const editVideo = (video) => {
    setEditing(video);
    setForm({ title: video.title || "", youtubeUrl: video.youtubeUrl || "" });
    setNotice("");
  };

  const saveVideo = async (event) => {
    event.preventDefault();
    if (isSaving) return;

    setIsSaving(true);
    setError("");
    setNotice("");
    const video = {
      title: form.title.trim(),
      youtubeUrl: form.youtubeUrl.trim(),
    };

    try {
      if (editing) {
        await updateVideo(editing._id, video, token);
      } else {
        const result = await createVideo(video, token);
        if (result?.video?._id) setSelectedId(result.video._id);
      }
      await loadVideos();
      setEditing(null);
      setForm({ title: "", youtubeUrl: "" });
      setNotice(editing ? "Video updated." : "Video published.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Could not save this video.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <PageHeading
        eyebrow="Content feed / public About page"
        title="Farm Videos"
        description="Add and update YouTube videos displayed on the public About page."
        action={<span className="admin-target-pill">Target: /about#farm-videos</span>}
      />
      <div className="admin-video-layout">
        <div>
          <section className="admin-panel admin-video-form">
            <div className="admin-card-heading">
              <h2><FiFilm /> {editing ? "Edit video" : "Add a video"}</h2>
              <button className="admin-button admin-button-light" onClick={startNewVideo} type="button">
                <FiPlus /> New video
              </button>
            </div>
            <form className="admin-api-form" onSubmit={saveVideo}>
              <label className="admin-field-label">Video title
                <input maxLength="120" onChange={(event) => setForm({ ...form, title: event.target.value })} value={form.title} />
              </label>
              <label className="admin-field-label">YouTube URL
                <input onChange={(event) => setForm({ ...form, youtubeUrl: event.target.value })} placeholder="https://youtu.be/..." required type="url" value={form.youtubeUrl} />
              </label>
              {error && <p className="admin-api-error" role="alert">{error}</p>}
              {notice && <p className="admin-inline-notice" role="status">{notice}</p>}
              <div className="admin-video-form-actions">
                <span>{videos.length} published video{videos.length === 1 ? "" : "s"}</span>
                <button className="admin-button admin-button-primary" disabled={isSaving} type="submit">
                  {isSaving ? "Saving..." : editing ? "Save changes" : "Publish video"}
                </button>
              </div>
            </form>
          </section>
          <section className="admin-panel admin-video-list">
            <div className="admin-card-heading"><h2>Published videos</h2><button className="admin-button admin-button-light" disabled={isLoading} onClick={loadVideos} type="button">Refresh</button></div>
            {isLoading ? <p className="admin-empty">Loading videos...</p> : videos.length === 0 ? <p className="admin-empty">No videos have been published yet.</p> : (
              <div className="admin-video-items">
                {videos.map((video) => (
                  <div className={`admin-video-item${selectedId === video._id ? " is-selected" : ""}`} key={video._id}>
                    <button className="admin-video-item-select" onClick={() => setSelectedId(video._id)} type="button">
                      <strong>{video.title || "Untitled video"}</strong>
                      <span>{video.youtubeUrl}</span>
                    </button>
                    <button aria-label={`Edit ${video.title || "video"}`} className="admin-button admin-button-light" onClick={() => editVideo(video)} type="button"><FiEdit2 /> Edit</button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
        <aside className="admin-panel admin-video-preview">
          <div className="admin-card-heading"><h2><FiEye /> Public preview</h2><span className="admin-status status-active">{selected ? "Published" : "No video"}</span></div>
          {selected && getYoutubeEmbedUrl(selected) ? (
            <iframe
              className="admin-video-embed"
              src={getYoutubeEmbedUrl(selected)}
              title={selected.title || "Nico Farms video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : <p className="admin-empty">{isLoading ? "Loading video preview..." : "Select or publish a video to preview it."}</p>}
          {selected && <><h3 className="admin-preview-title">{selected.title || "Nico Farms video"}</h3><a className="admin-preview-link" href={selected.youtubeUrl} rel="noreferrer" target="_blank">Open on YouTube <FiExternalLink /></a></>}
          <a className="admin-preview-link" href="/about#farm-videos">Open public About page <FiExternalLink /></a>
        </aside>
      </div>
      <div className="admin-notice">
        <span className="admin-notice-icon"><FiFilm aria-hidden="true" /></span>
        <div><strong>Backend-supported actions</strong><p>You can add and edit videos. The current API does not provide a video delete endpoint.</p></div>
      </div>
    </>
  );
}

export { ContactsPage, TeamPage, VideoPage };
