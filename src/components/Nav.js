import React from 'react';

const Nav = ({ currentPage, handlePageChange }) => {
return(
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  
export default Nav;
