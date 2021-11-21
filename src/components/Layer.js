import './Layer.css';

function Layer(props) {
  return (
    <div className="mapLayer">
      This is a layer {props.numbLayer}
      <br/>
      opacity is {props.opacity}
    </div>
  );
}

export default Layer;
