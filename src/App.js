import React from 'react';
import './App.css';
import Sidenav from './Sidenav';
import Home from './Home';
import FeaturedApps from './FeaturedApps';
import AboutMe from './AboutMe';
import OtherProjects from './OtherProjects';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Sidenav />
        <div className="section">
          <Home id="home" />
        </div>
        <div className="section">
          <FeaturedApps id="featured-apps" />
        </div>
        <div className="section">
          <AboutMe id="about-me" />
        </div>
        <div className="section">
          <OtherProjects id="other-projects" />
        </div>
        <div className="section">
          <ContactMe id="contact-me" />
        </div>
      </div>
    </div>
  );
}

export default App;
