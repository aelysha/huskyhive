// NavBar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import logo from './imgs/husky_hive_logo_right.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);
  
  function handleNav() {
    setShowLinks(!showLinks);
  }

  return (
     <nav className="navbar">
      <div className="left-side">
        <div className="logo-container">
          <img src={logo} alt="HuskyHive Logo" className="logo" />
          <NavLink to="/" className="brand-name" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="husky">HUSKY</span>
            <span className="hive">HIVE</span>
          </NavLink>
        </div>
        
        <div className={showLinks ? 'nav-links show' : 'nav-links'}>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li className="divider">\</li>
            <li><NavLink to="/rsos">RSOs</NavLink></li>
            <li className="divider">\</li>
            <li><NavLink to="/events">Events</NavLink></li>  
            <li className="divider">\</li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
          </ul>
        </div>
      </div>
      
      <div className="right-side">
        <NavLink to="/signin" className="account-icon-link">
          <AccountCircleIcon 
            sx={{ 
              fontSize: 32, 
              color: 'white',
              '&:hover': {
                color: '#f0f0f0'
              }
            }} 
          />
        </NavLink>
      </div>
    </nav>
  );       
}

export default NavBar;