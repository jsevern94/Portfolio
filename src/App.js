import React from 'react';
import './App.css';
import Sidenav from './Sidenav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidenav />
        <div id="section1" className="filler">Home</div>
        <div id="section2" className="filler">Featured Apps</div>
        <div id="section3" className="filler">About Me</div>
        <div id="section4" className="filler">Other Projects</div>
        <div id="section5" className="filler">Contact Me</div>
      </header>
    </div>
  );
}

export default App;
