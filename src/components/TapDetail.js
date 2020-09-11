import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function TapDetail(props){
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.name} - {tap.brand}</h3>
      <p>{tap.price} - {tap.alcoholContent}</p>
      <Button variant="info" onClick={ props.onClickingPint() }>Pour</Button>
      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Update Tap</Button>
      <Button variant="danger" onClick={() => onClickingDelete(tap.id) }>Delete Tap</Button>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default TapDetail;