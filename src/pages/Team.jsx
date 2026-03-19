import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Kenneth Geoffrey",
      role: "Founder & CEO",
      bio: "Kenneth Geoffrey founded Nico Farms in 2020 with a vision to create sustainable poultry farming operations. His leadership and commitment to quality have established Nico Farms as a trusted name in the industry.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Raji Bomodeoku",
      role: "Co-Founder & Partner",
      bio: "Raji Bomodeoku brings extensive experience in business development and agricultural operations. As a long-time partner of Kenneth, he has been instrumental in the strategic growth of Nico Farms.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <>
      <Navbar />

      <main className="px-6 md:px-16 py-12">

        {/* HEADER */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">
            Our Team
          </h1>
          <p className="text-gray-600 mt-3">
            Meet the people behind Nico Farms' success
          </p>
        </section>

        {/* TEAM MEMBERS */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-green-800">{member.name}</h3>
                  <p className="text-green-600 font-semibold">{member.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR COMMITMENT */}
        <section className="mt-16 bg-green-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Shared Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kenneth and Raji share a common vision of transforming Nigeria's poultry industry
              through sustainable, responsible farming practices. Their partnership combines
              agricultural expertise with business acumen to create a farm that prioritizes
              quality, welfare, and community impact.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Team