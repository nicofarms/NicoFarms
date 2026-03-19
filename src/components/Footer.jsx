import logo from "../assets/images/NicoFarmLogo.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* MAIN FOOTER CONTENT */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* LOGO AND BRAND */}
          <div className="md:col-span-1">
            <img src={logo} alt="Nico Farms Logo" className="h-12 mb-4" />
            <p className="text-green-100 text-sm leading-relaxed">
              Sustainably produced poultry products serving communities across Ogun and Lagos State.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-green-100 hover:text-white transition">About</Link></li>
              <li><Link to="/products" className="text-green-100 hover:text-white transition">Products</Link></li>
              <li><Link to="/sustainability" className="text-green-100 hover:text-white transition">Sustainability</Link></li>
              <li><Link to="/contact" className="text-green-100 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Location</h3>
            <div className="text-sm text-green-100 space-y-2">
              <p><strong>Farm:</strong><br />Igbessa, Ogun State, Nigeria</p>
              <p><strong>Office:</strong><br />7 Austin Obiador Street, Ago Palace Way, Okota, Isolo, Lagos</p>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.instagram.com/nicofarmsltd?igsh=MWYxcmRjd3VmYzBycQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-100 hover:text-white transition text-sm"
            >
              📷 Instagram: @nicofarmsltd
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
          <p>© {new Date().getFullYear()} Nico AgriFarms Limited. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/contact" className="text-green-100 hover:text-white transition mr-4">Contact</Link>
            <Link to="/investors" className="text-green-100 hover:text-white transition">Investors</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
