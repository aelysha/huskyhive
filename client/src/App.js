import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn'; 
import NavBar from './components/NavBar/NavBar.js';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile.js';
import RSO from './Pages/RSO/RSO';
import Event from './Pages/Event/Event';
import Search from './Pages/Search/Search.js'
import EventSearch from './Pages/Search/EventSearch.js'
import Calendar from './Pages/Calendar/Calendar';
import Footer from './components/Footer/Footer.js';
import EventCarousel from './Pages/HomeV2/HomeV2.js';
import LandingPage from './Pages/Landing/LandingPage.js';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; 

// cd client, npm start
function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
          <div className="app-container">
            <NavBar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/RSOs" element={<Search />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="/Events" element={<EventSearch />} />
                <Route path="Calendar" element={<Calendar />} />
                <Route path="*" element={<LandingPage />} />
                <Route path="/Home" element={<EventCarousel />} />
                <Route path="/SignIn" element={<SignIn />} />
                
                <Route path="/RSO" element={<RSO />} />
                <Route path="/Event" element={<Event />} />
              </Routes>
            </div>
            <Footer />
          </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
