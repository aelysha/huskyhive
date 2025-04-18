import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './components//Pages/Home/Home';
import RSOs from './components/Pages/RSO/RSO';
import Login from './components/Pages/SignIn/SignIn';
import Events from './components/Pages/Event/Event';
import EventCarousel from './components/Pages/HomeV2/HomeV2';

// cd client, npm start
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rsos" element={<RSOs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/homeV2" element={<EventCarousel />} />
      </Routes>
  </div>
  )
}

export default App
