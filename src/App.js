import React, { useState } from 'react';
import './App.css';
import Layer from './components/Layer';

function App() {
  const [opacityBalance, setOpacityBalance] = useState(50);

  return (
    <div className="App">
      {/* {opacityBalance} */}
      
      <div className="containerMultipleLayers">
        <Layer numbLayer={1}/>
        <Layer numbLayer={2}/>
      </div>

      <div id="controls">
        Opacity Balance
        <input onChange={(e) => setOpacityBalance(e.target.value)} type="range" min="1" max="100" defaultValue={opacityBalance} className="slider" id="myRange"/>
      </div>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
