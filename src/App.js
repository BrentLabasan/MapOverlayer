import React, { useState } from 'react';
import './App.css';
import Layer from './components/Layer';
import LocationInputField from './components/LocationInputField';

function App() {
  const [opacityBalance, setOpacityBalance] = useState(50);
  const [zoomLevel, setZoomLevel] = useState(15);
  const [selectedLayer, setSelectedLayer] = useState(1);

  const [layer1Query, setLayer1Query] = useState('NYC Central Park');
  const [layer2Query, setLayer2Query] = useState('Space Needle');

  function handleSetLayer1Query(value) {
    alert();

    setLayer1Query(value);
  }

  return (
    <div className="App">
      {/* {opacityBalance} */}
      
      <div className="containerMultipleLayers">
        <Layer numbLayer={1} selectedLayer={selectedLayer} opacity={ 1 - opacityBalance / 100 } gMapQuery={layer1Query} zoomLevel={zoomLevel} />
        <Layer numbLayer={2} selectedLayer={selectedLayer} opacity={ opacityBalance / 100 } gMapQuery={layer2Query} zoomLevel={zoomLevel} />
      </div>

      <div id="controls">
        Layer Chooser {selectedLayer}
        <br/>
        <button value={1} onClick={(e) => setSelectedLayer(parseInt(e.target.value))} >
        1
        </button>
        <button value={2} onClick={(e) => setSelectedLayer(parseInt(e.target.value))} >
        2
        </button>

<br/>
<br/>

        Opacity Balance
        <br/>
        <input onChange={(e) => setOpacityBalance(e.target.value)} type="range" min="1" max="100" defaultValue={opacityBalance} className="slider" id="myRange"/>
        <br/>
        <br/>
        Zoom Level
        <br/>
        <input id="ctrlZoomLevel" onChange={(e) => setZoomLevel(e.target.value)} type="number" min="1" max="21" defaultValue={zoomLevel} /> {zoomLevel}
      
        <br/>
        <br/>

        Location 1 | TOP LEVEL: {layer1Query}
        {/* <input type="text" value={layer1Query} /> <button onClick={(e) => setLayer1Query( this.value)}>SET</button> */}
        <LocationInputField layerQuery={layer1Query} setLayer1Query={(value) => handleSetLayer1Query(value)} />
        <br/>
        Location 2 &nbsp;
        {/* <input type="text" value={layer2Query} /> <button>SET</button> */}
      
      
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
