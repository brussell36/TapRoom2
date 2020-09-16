import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props) {
  return(
    <React.Fragment>
      <hr/>
      {props.tapList.map((tap) => 
        <Tap 
        whenTapClicked = {props.onTapSelection}
        name = {tap.name}
        brand = {tap.brand}
        price = {tap.price}
        alcoholContent = {tap.alcoholContent}
        pints = {tap.pints}
        id = {tap.id} />
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
}

export default TapList;