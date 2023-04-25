import React from "react";
import Nav from "./Nav";

const Header = (props) => {
  const { currentPage, handlePageChange } = props;

  return (
    <header
      className="custom-nav-container"
    >
      <h1>It's just Julieta.</h1>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;