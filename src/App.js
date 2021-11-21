import './App.css';
import Layer from './components/Layer';

function App() {
  return (
    <div className="App">
      <div className="containerMultipleLayers">
        <Layer numbLayer={1}/>
        <Layer numbLayer={2}/>
      </div>

      <div id="controls">
        Opacity Balance
        <input type="range" min="1" max="100" defaultValue="50" className="slider" id="myRange"/>
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
