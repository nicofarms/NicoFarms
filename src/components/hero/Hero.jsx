// import video from "../assets/videos/farmVideo.mp4";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">

//       {/* VIDEO BACKGROUND */}
//       <video
//         src={video}
//         autoPlay
//         loop
//         muted
//         className="w-full h-full object-cover"
//       />

//       {/* MULTIPLE OVERLAY LAYERS FOR BETTER TEXT READABILITY */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black bg-opacity-30"></div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-6xl mx-auto">

//         {/* BADGE */}
//         <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
//           🏆 Trusted Farm Since 2020
//         </div>

//         {/* MAIN HEADLINE */}
//         <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//           Farm Fresh Eggs & Quality Poultry
//           <span className="block text-green-300">You Can Trust</span>
//         </h1>

//         {/* SUBTEXT */}
//         <p className="text-white text-lg md:text-xl max-w-3xl mb-8 leading-relaxed opacity-90">
//           Sustainably produced poultry products serving communities across Ogun and Lagos State.
//           Quality you can taste, freshness you can trust.
//         </p>

//         {/* CTA BUTTONS */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link to="/products">
//             <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               🥚 View Products
//             </button>
//           </Link>
//           <Link to="/contact">
//             <button className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//               📞 Contact Us
//             </button>
//           </Link>
//         </div>

//         {/* SCROLL INDICATOR */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useState } from "react";
import "./hero.css";

const Hero = () => {

  return (
    <div className="herobg">
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <h1>Farm Fresh Eggs & Quality Poultry You Can Trust</h1>
        <div className="buttons">
          <button className="butt-tag">View Products</button>
          <button className="butt-secondary">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
