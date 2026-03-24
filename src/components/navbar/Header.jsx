// import { Link } from "react-router-dom";
// import logo from "../assets/images/NicoFarmLogo.jpg";
// import { useState } from "react";

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* LOGO */}
//           <div className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Nico Farms Logo"
//               className="h-10 w-auto object-contain"
//             />
//             <h1 className="text-xl font-bold text-green-800 hidden sm:block">Nico Farms</h1>
//           </div>

//           {/* DESKTOP NAV LINKS */}
//           <div className="hidden md:flex items-center space-x-8">

//             <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Home
//             </Link>

//             {/* ABOUT DROPDOWN */}
//             <div className="relative group">
//               <span className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors">
//                 About Us ▼
//               </span>

//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">

//                 <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-t-lg transition-colors">
//                   Our Story
//                 </Link>

//                 <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
//                   Mission & Vision
//                 </Link>

//                 <Link to="/team" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-b-lg transition-colors">
//                   Our Team
//                 </Link>

//               </div>
//             </div>

//             {/* PRODUCTS DROPDOWN */}
//             <div className="relative group">
//               <span className="text-gray-700 hover:text-green-600 font-medium cursor-pointer transition-colors">
//                 Our Products ▼
//               </span>

//               <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">

//                 <Link to="/products" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-t-lg transition-colors">
//                   Fresh Eggs
//                 </Link>

//                 <Link to="/products" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
//                   Broiler Chickens
//                 </Link>

//                 <Link to="/products" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-b-lg transition-colors">
//                   Future Products
//                 </Link>

//               </div>
//             </div>

//             <Link to="/sustainability" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Sustainability
//             </Link>

//             <Link to="/values" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Our Values
//             </Link>

//             <Link to="/investors" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
//               Investors
//             </Link>

//             <Link to="/contact" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
//               Contact
//             </Link>

//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-green-600 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {isMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//         </div>

//         {/* MOBILE MENU */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200 py-4">
//             <div className="px-2 space-y-1">
//               <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Home
//               </Link>

//               <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 About Us
//               </Link>

//               <Link to="/team" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Our Team
//               </Link>

//               <Link to="/products" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Products
//               </Link>

//               <Link to="/sustainability" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Sustainability
//               </Link>

//               <Link to="/values" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Our Values
//               </Link>

//               <Link to="/investors" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors">
//                 Investors
//               </Link>

//               <Link to="/contact" className="block px-3 py-2 bg-green-600 text-white rounded-md text-center font-medium">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="top-head">
        <div className="input-wrapper">
          <IoIosSearch fontSize={25} />
          <input type="text" className="input-con" placeholder="SEARCH" />
        </div>
        <div className="head-right">
          <p>WHERE TO BUY</p>
          <p>CORPORATE</p>
          <p>WORK WITH US</p>
          <p>OUR VALUES</p>
        </div>
      </div>
      <div className="head-container">
        <div className="logo-container">
          <img src="/IMG/Nico-LOgo.png" alt="" />
        </div>
        <div className="first-con">
          <p>ABOUT</p>
          <p>PRODUCTS</p>
        </div>
        <div className="last-con">
          <p>SUSTAINABILITY</p>
          <p>CONTACT</p>
        </div>
        <span className="burger"><RxHamburgerMenu /></span>
      </div>
    </>
  );
};

export default Navbar;
