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
      <div className="everything">
        <Sidenav />
        <div className="home">
          <AboutMe />
        </div>
        <div className="featured-apps">
          <FeaturedApps />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="contact">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}

export default App;
