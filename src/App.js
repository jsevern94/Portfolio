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
      <header className="App-header">
        <Sidenav />
        <Home id="home" className="filler"/>
        <FeaturedApps id="featured-apps" className="filler"/>
        <AboutMe id="about-me" className="filler"/>
        <OtherProjects id="other-projects" className="filler"/>
        <ContactMe id="contact-me" className="filler"/>
      </header>
    </div>
  );
}

export default App;
