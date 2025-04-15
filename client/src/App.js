import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn'; 


import NavBar from './components/NavBar/NavBar.js'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile';
import RSO from './Pages/RSO/RSO'
import Event from './Pages/Event/Event'
import Calendar from './Pages/Calendar/Calendar'
import Footer from './components/Footer/Footer.js';

// cd client, npm start
function App(props) {
  return (
    <Router>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="RSO" element={<RSO />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Event" element={<Event />} />
            <Route path="*" element={<Home />} />
            <Route path="Calendar" element={<Calendar />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;