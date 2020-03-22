import React from 'react';
import '../src/DataSecurity.css';
import cyberLogo from './cyber.png';

function DataSecurity() {
  return (
    <div className="DataSecurity">
      <header className="Cyber-header">
        <h1><u>Wir nehmen Datenschutz ernst</u></h1>
        <img src={cyberLogo} className="Cyber-logo" alt="logo" />
        <div className="DataSecurity2">
        <p>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus totam nihil cum illum quidem veniam? Perspiciatis commodi facere eos excepturi cum optio, vero voluptate, nulla laborum eius laudantium corrupti?
        </p>
        <p>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, facilis nulla? Deserunt ipsum, fugit, ex hic debitis libero fuga magnam qui placeat exercitationem quos maiores, dolorem beatae commodi eos id!
        </p>
        </div>
        <a
          className="Cyber-link"
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default DataSecurity;
