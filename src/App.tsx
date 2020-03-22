import React from 'react';
import '../src/App.css';
import ButtonContainer from './Components/CSSComponents/ButtonContainer';
import OrangeButton from './Components/CSSComponents/OrangeButton';
import logo from './logomy.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <div>
        <OrangeButton>
          Jetzt loslegen
        </OrangeButton>
        </div>
        <a
          className="App-link"
          href="/Datenschutz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonContainer>Wir nehmen Datenschtz ernst.</ButtonContainer>
          </a>
          
      </body>
    </div>
  );
}

export default App;
