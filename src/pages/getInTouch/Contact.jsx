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
      {/* HEADER */}
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Contact us for fresh eggs, poultry supply, or partnership
          opportunities
        </p>
      </section>

      <div className="contact-container">
        {/* FORM */}
        <section className="contact-form-section">
          <h2>Send us a Message</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 xxx xxx xxxx"
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
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

        {/* INFO */}
        <section className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-card">
            <h3>Farm Location</h3>
            <p>
              Nico Farms Crescent, Ejila, Ado-Odo/Ota, Ogun Sta
              <br />
              Serving Ojo to Badagry (Lagos)
            </p>
          </div>

          <div className="info-card">
            <h3>Corporate Office</h3>
            <p>
              7 Austin Obiador Street <br />
              Ago Palace Way, Okota <br />
              Isolo, Lagos State
            </p>
          </div>

          <div className="info-card">
            <h3>Business Enquiries</h3>
            <p>
              📧 info@nicofarms.com <br />
              📞 +234 803 040 5307
            </p>
          </div>

          <div className="info-card">
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

      {/* SERVICE AREAS */}
      <section className="service-areas">
        <h2>Service Areas</h2>
        <p>
          We serve communities across Ogun and Lagos States with fresh poultry
          products.
        </p>

        <div className="areas-grid">
          <div className="area">🏘️ Igbessa, Ogun</div>
          <div className="area">🏙️ Ojo to Badagry</div>
          <div className="area">🏪 Retailers & Vendors</div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
