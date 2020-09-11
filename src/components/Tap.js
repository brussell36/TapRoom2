import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return(
    <React.Fragment>
      <div onClick= {() => props.whenTapClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <h5>{props.price} - {props.alcoholContent}</h5>
        <p>{props.pints}</p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  whenTapClicked: PropTypes.func,
};

export default Tap;