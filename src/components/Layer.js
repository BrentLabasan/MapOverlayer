import './Layer.css';

function Layer(props) {
  return (
    <div className="mapLayer" style={{ 
      opacity: props.opacity,
      pointerEvents: props.numbLayer === props.selectedLayer ? 'auto' : 'none'
    }}>

      {/* This is a layer {props.numbLayer}
      <br/>
      opacity is {props.opacity}
      <br/>
      zoomLevel is {props.zoomLevel}
      <br/> */}

      <iframe
        width="100%"
        height="700"
        style={{border:0}}
        loading="lazy"
        allowFullScreen
        disableDefaultUI
        src={`https://www.google.com/maps/embed/v1/place?q=${props.gMapQuery}&zoom=${props.zoomLevel}&key=AIzaSyCapkMXSPTKQO9Sz40Q9b7UhOTxY0djiaM`}
      >
      </iframe>
    </div>
  );
}

export default Layer;
