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
        <div id="home" className="section">
          <Home />
        </div>
        <div id="featured-apps" className="section">
          <FeaturedApps />
        </div>
        <div id="about-me" className="section">
          <AboutMe />
        </div>
        <div id="other-projects" className="section">
          <OtherProjects />
        </div>
        <div id="contact-me" className="section">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
