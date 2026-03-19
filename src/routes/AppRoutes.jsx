import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";
import Products from "../pages/Products";
import Sustainability from "../pages/Sustainability";
import Values from "../pages/Values";
import Investors from "../pages/Investors";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/values" element={<Values />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
