import React from 'react';
import ButtonContainer from '../components/buttonContainer';
import OrangeButton from '../components/orangeButton';
import '../css/app.css';
import Logo from '../res/logos/logomy.png';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo"/>
      </header>
      <body>
        <div>
          <OrangeButton>Jetzt loslegen</OrangeButton>
        </div>
        <a
          className="App-link"
          href="/datenschutz"
          rel="noopener noreferrer"
        >
        <ButtonContainer>Wir nehmen Datenschtz ernst.</ButtonContainer>
        </a>
      </body>
    </div>
  );
}

export default App;
