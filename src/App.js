import React from 'react';
import './App.css';
import Sidenav from './Sidenav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidenav />
        <div id="home" className="filler">Home</div>
        <div id="featured-apps" className="filler">Featured Apps</div>
        <div id="about-me" className="filler">About Me</div>
        <div id="other-projects" className="filler">Other Projects</div>
        <div id="contact-me" className="filler">Contact Me</div>
      </header>
    </div>
  );
}

export default App;
