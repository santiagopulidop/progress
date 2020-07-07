import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="btn-group fixed-bottom d-flex align-middle justify-content-center navbar "
      role="group"
      id="nav"
    >
      <Link to="/blog">
        <button type="button" className="btn btn-info button-navbar btn-one">
          Blog
        </button>
      </Link>
      <Link to="/aprende">
        <button type="button" className="btn btn-info button-navbar btn-two">
          Aprende
        </button>
      </Link>
      <Link to="/inspirate">
        <button type="button" className="btn btn-info button-navbar btn-three">
          Inspírate
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
