import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showSide, setShowSide] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    if (showSide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSide]);

  const handleNavigate = (path) => {
    setShowSide(false);
    navigate(path);
  };
  return (
    <>
      <div className="top-head">
        <div className="input-wrapper">
          <IoIosSearch fontSize={25} />
          <input type="text" className="input-con" placeholder="SEARCH" />
        </div>
        <div className="head-right">
          <p
            className={isActive("/team") ? "active" : ""}
            onClick={() => navigate("/team")}
          >
            OUR TEAM
          </p>
          <p
            className={isActive("/investors") ? "active" : ""}
            onClick={() => navigate("/investors")}
          >
            WORK WITH US
          </p>
          <p
            className={isActive("/values") ? "active" : ""}
            onClick={() => navigate("/values")}
          >
            OUR VALUES
          </p>
          <p
            className={isActive("/privacy") ? "active" : ""}
            onClick={() => navigate("/privacy")}
          >
            PRIVACY POLICY
          </p>
        </div>
      </div>
      <div className="head-container">
        <div className="logo-container" onClick={() => handleNavigate("/")}>
          <img src="/IMG/Nico-LOgo.png" alt="" />
        </div>
        <div className="first-con">
          <p
            className={isActive("/about") ? "active" : ""}
            onClick={() => handleNavigate("/about")}
          >
            ABOUT
          </p>
          <p
            className={isActive("/products") ? "active" : ""}
            onClick={() => handleNavigate("/products")}
          >
            PRODUCTS
          </p>
        </div>
        <div className="last-con">
          <p
            className={isActive("/sustainability") ? "active" : ""}
            onClick={() => handleNavigate("/sustainability")}
          >
            SUSTAINABILITY
          </p>
          <p
            className={isActive("/contact") ? "active" : ""}
            onClick={() => handleNavigate("/contact")}
          >
            CONTACT
          </p>
        </div>
        <span
          className={`burger ${showSide ? "active" : ""}`}
          onClick={() => setShowSide(!showSide)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </span>
      </div>
      <div className={`sideBar ${showSide ? "active" : ""}`}>
        <div className="nav-items">
          <p onClick={() => handleNavigate("/about")}>ABOUT</p>
          <p onClick={() => handleNavigate("/products")}>PRODUCTS</p>
          <p onClick={() => handleNavigate("/sustainability")}>SUSTAINABILITY</p>
          <p onClick={() => handleNavigate("/contact")}>CONTACT</p>
        </div>
        <button>DONATE</button>
      </div>
    </>
  );
};

export default Navbar;
