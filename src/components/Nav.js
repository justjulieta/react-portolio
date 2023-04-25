import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="custom-nav">

        <a
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>         
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>       
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </a>

    </nav>
  );
};

export default Nav;