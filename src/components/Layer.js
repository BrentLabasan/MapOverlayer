import './Layer.css';

function Layer(props) {
  return (
    <div className="mapLayer" style={{ opacity: props.opacity }}>
      This is a layer {props.numbLayer}
      <br/>
      opacity is {props.opacity}
    </div>
  );
}

export default Layer;
