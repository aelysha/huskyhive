import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css"
import logo from './imgs/logo.png';
import profile from './imgs/profile.png'

function NavBar(props) {

    const[showLinks, setShowLinks] = useState(false);
    function handleNav(event) {
        setShowLinks(!showLinks)
      };

    return(
        <nav className='navbar'>
            <div className='left-pane'>
                <div className='logo'>
                    <img src= { logo } alt='Husky Hive Logo' className="logo"></img>
                </div>
                <div className={showLinks ? 'nav-links show' : 'nav-links'}>
                    <ul className="selected">
                        <li><NavLink to="Home">Home</NavLink></li>
                        <li><NavLink to="RSO">RSOs</NavLink></li>
                        <li><NavLink to="Event">Events</NavLink></li>
                        <li><NavLink to="Calendar">Calendar</NavLink></li>
                    </ul>
                </div>
            </div>
            <NavLink to="Profile" className='right-pane'>
                <img src={ profile } alt="Profile Icon" className="profile"/>
            </NavLink>
        </nav> 
    );
}

export default NavBar