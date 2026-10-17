import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-shell">
          <span className="contact-eyebrow">We’re here to help</span>
          <h1>Get in touch</h1>
          <p>
            Contact us about fresh eggs, poultry supply, or partnership
            opportunities. We’d be glad to hear from you.
          </p>
        </div>
      </section>

      <div className="contact-shell contact-container">
        <section className="contact-form-section">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">Send an enquiry</span>
            <h2>How can we help?</h2>
            <p>Share a few details and our team will be in touch.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Name *</label>
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email *</label>
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="contact-phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 xxx xxx xxxx"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                name="message"
                id="contact-message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section className="contact-info">
          <div className="contact-section-heading">
            <span className="contact-eyebrow">Reach our team</span>
            <h2>Contact information</h2>
            <p>Choose the location or channel that works best for you.</p>
          </div>

          <div className="info-card">
            <span className="info-card-label">Farm</span>
            <h3>Farm Location</h3>
            <p>
              Nico Farms Crescent, Ejila, Ado-Odo/Ota, Ogun State
              <br />
              Serving Ojo to Badagry (Lagos)
            </p>
          </div>

          <div className="info-card">
            <span className="info-card-label">Office</span>
            <h3>Corporate Office</h3>
            <p>
              7 Austin Obiador Street <br />
              Ago Palace Way, Okota <br />
              Isolo, Lagos State
            </p>
          </div>

          <div className="info-card">
            <span className="info-card-label">Enquiries</span>
            <h3>Business Enquiries</h3>
            <p>
              <a href="mailto:info@nicofarms.com">info@nicofarms.com</a>
              <br />
              <a href="tel:+2348030405307">+234 803 040 5307</a>
            </p>
          </div>

          <div className="info-card">
            <span className="info-card-label">Social</span>
            <h3>Follow Us</h3>
            <a
              href="https://www.instagram.com/nicofarmsltd?igsh=MWYxcmRjd3VmYzBycQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Instagram: @nicofarmsltd
            </a>
          </div>
        </section>
      </div>

      <section className="contact-shell service-areas">
        <div className="service-area-heading">
          <span className="contact-eyebrow">Where we serve</span>
          <h2>Service areas</h2>
          <p>
            We serve communities across Ogun and Lagos States with fresh poultry
            products.
          </p>
        </div>
        <div className="areas-grid">
          <div className="area"><span>01</span>Igbessa, Ogun</div>
          <div className="area"><span>02</span>Ojo to Badagry</div>
          <div className="area"><span>03</span>Retailers &amp; vendors</div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
