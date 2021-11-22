import React, { useState } from 'react';
// import './Layer.css';

function Layer(props) {
  const [layerQuery, setLayerQuery] = useState(props.layerQuery);

  function handleButtonClick() {
    // debugger;
    props.setLayer1Query(props.numbLayer, layerQuery);
  }

  function handlePresetButtonClick(location) {
    console.log('location1', location); // WTF location turns out to be a SyntheticEvent, not the city name string
    setLayerQuery(location.target.innerText);
    props.setLayer1Query(props.numbLayer, location.target.innerText);
  }

  const generatePresets = props.locationsList.map((location, index) => {
    console.log('location', location, typeof location); // shows the string of city
    return <button key={ index } onClick={ location => handlePresetButtonClick(location) }>{location}</button>
  });


  return (
    <div>
      <input type="text" value={layerQuery} onChange={ (e) => setLayerQuery(e.target.value) } /> <button onClick={ handleButtonClick } >SET</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {generatePresets}
    </div>
  );
}

export default Layer;
