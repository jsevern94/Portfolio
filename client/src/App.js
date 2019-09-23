import React from 'react';
import './App.css';
import Sidenav from './Sidenav';
import Skills from './Skills';
import FeaturedApps from './FeaturedApps';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Sidenav />
        <div id="about-me" className="home">
          <AboutMe />
        </div>
        <div id="featured-apps" className="featured-apps">
          <FeaturedApps />
        </div>
        <div id="skills" className="skills">
          <Skills />
        </div>
        <div id="contact-me" className="section">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
