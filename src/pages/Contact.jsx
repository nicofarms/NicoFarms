import React, { useState } from "react";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";

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
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Get in Touch</h1>
          <p className="text-gray-600 mt-3">
            Contact us for fresh eggs, poultry supply, or partnership
            opportunities
          </p>
        </section>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* CONTACT INFO */}
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* FARM LOCATION */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Farm Location
                </h3>
                <p className="text-gray-700">
                  Igbessa, Ogun State, Nigeria
                  <br />
                  Serving communities from Ojo to Badagry in Lagos State
                </p>
              </div>

              {/* OFFICE LOCATION */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Office Address
                </h3>
                <p className="text-gray-700">
                  7 Austin Obiador Street
                  <br />
                  Ago Palace Way, Okota
                  <br />
                  Isolo, Lagos State, Nigeria
                </p>
              </div>

              {/* BUSINESS ENQUIRIES */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Business Enquiries
                </h3>
                <p className="text-gray-700 mb-2">
                  For restaurants, bakeries, retailers, and bulk orders:
                </p>
                <p className="text-gray-700">
                  📧 info@nicofarms.com
                  <br />
                  📞 +234 xxx xxx xxxx
                </p>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/nicofarmsltd?igsh=MWYxcmRjd3VmYzBycQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  📷 Instagram: @nicofarmsltd
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* SERVICE AREAS */}
        <section className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We proudly serve communities across Ogun and Lagos States,
              providing fresh, quality poultry products to households,
              businesses, and food service providers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-gray-600">
              <div>🏘️ Igbessa, Ogun State</div>
              <div>🏙️ Ojo to Badagry, Lagos State</div>
              <div>🏪 Local retailers and vendors</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
