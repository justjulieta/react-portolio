import React from 'react';

const Nav = (props) => {
  const { currentPage, handlePageChange } = props;

return(
      <nav>
        <ul>
          <li href="#home" onClick={() => handlePageChange("Home")}"/">Home</li>
          <li href="#About" onClick={() => handlePageChange("About")}"/>About</Link></li>
          <li href="#Portfolio" onClick={() => handlePageChange("Portfolio")}=">Portfolio</li>
          <li href="#Contacts" onClick={() => handlePageChange("Contacts")}="/"="/contact">Contact</li>
        </ul>
      </nav>
    );
  };
  
export default Nav;
