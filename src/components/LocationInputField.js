import React, { useState } from 'react';
// import './Layer.css';

function Layer(props) {
  const [layerQuery, setLayerQuery] = useState(props.layerQuery);

  function handleButtonClick() {
    props.setLayer1Query(layerQuery);
  }

  return (
    <div>
    <input type="text" value={layerQuery} onChange={ (e) => setLayerQuery(e.target.value) } /> <button onClick={ handleButtonClick } >SET</button>
    </div>
  );
}

export default Layer;
