import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn'; 
import NavBar from './components/NavBar/NavBar.js';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile.js';
import RSO from './Pages/RSO/RSO';
import Event from './Pages/Event/Event';
import Calendar from './Pages/Calendar/Calendar';
import Footer from './components/Footer/Footer.js';
import EventCarousel from './Pages/HomeV2/HomeV2.js';

// cd client, npm start
function App(props) {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="RSO" element={<RSO />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Event" element={<Event />} />
            <Route path="Calendar" element={<Calendar />} />
            <Route path="*" element={<Home />} />
            <Route path="/Home" element={<EventCarousel />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
