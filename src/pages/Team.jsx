import React from "react";
import Navbar from "../components/navbar/Header";
import Footer from "../components/Footer";
import { team, consultants } from "../data/company";

const Team = () => {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">
        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Our Team</h1>
          <p className="text-gray-600 mt-3">
            Meet the people behind Nico Farms' success
          </p>
        </section>

        {/* TEAM MEMBERS */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800">Leadership Team</h2>
            <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                  />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold text-lg mb-4">{member.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONSULTANTS & SPECIALISTS */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800">Consultants & Specialists</h2>
            <div className="w-16 h-1 bg-green-600 rounded-full mx-auto mt-4"></div>
          </div>

          {consultants.map((consultant, index) => (
            <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg mb-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Profile Image */}
                <div className="text-center">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-green-200 shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-green-800 mb-2">{consultant.name}</h3>
                  <p className="text-green-700 font-semibold mb-1">{consultant.role}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Firm:</span> {consultant.company}
                  </p>
                </div>

                {/* Bio & Specialties */}
                <div className="md:col-span-2">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {consultant.bio}
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-3">
                      Areas of Expertise:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {consultant.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-green-600 font-bold mr-3">✓</span>
                          <span className="text-gray-700">{specialty}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-8 pt-8 border-t-2 border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-4">Professional Profile</h4>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {consultant.about}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* OUR COMMITMENT */}
        <section className="mt-16 bg-green-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Shared Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kenneth Geoffrey and our expert consultant team share a common vision of transforming
              Nigeria's poultry industry through sustainable, responsible farming practices. Our
              collaboration combines agricultural expertise with business acumen and veterinary excellence
              to create a farm that prioritizes quality, animal welfare, and community impact.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;
