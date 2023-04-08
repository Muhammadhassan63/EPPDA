import React from 'react';

import { Link } from 'react-router-dom';
import CrimeForm from './CrimeForm';

import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div id="navbar__logo" >
          <Link to="/"><h2 >Dispatcher</h2></Link>
          
        </div>
        <ul className="navbar__menu">
          <li><Link to="/crimeform">Crime Form</Link></li>
          <li><Link to="/viewreport">View Reports</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
      </div>
      <div className="navbar__right">
        <button className='logout-button'>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
