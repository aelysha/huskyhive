import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile';
import RSO from './Pages/RSO/RSO'
import Event from './Pages/Event/Event'
import Calendar from './Pages/Calendar/Calendar'

// cd client, npm start
function App(props) {
  return (
    <div>
        <header>
          <NavBar />
        </header>
        <main>
          <div>
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="RSO" element={<RSO />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Event" element={<Event />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="*" element={<Home />} />
            </Routes>
          </div>   
        </main>
      </div>
  );
}

export default App;