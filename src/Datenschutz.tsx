import React from 'react';
import '../src/App.css';
import logo from './logo.svg';

function Datenschutz() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jetzt loslegen
        </p>
        <a
          className="App-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wir nehmen Datenschtz ernst.
        </a>
      </header>
    </div>
  );
}

export default Datenschutz;
