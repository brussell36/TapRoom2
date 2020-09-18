import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';

function TapDetail(props){
  const { tap, onClickingDelete, onClickingPint, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Tap Detail</h1>
      <h3>{tap.name} - {tap.brand}</h3>
      <h5>{tap.price} - {tap.alcoholContent}</h5>
      <p>{tap.pints} Pints left</p>
      <Button variant="info" onClick={() => onClickingPint(tap.id) }>Pour</Button>
      <Button style={{margin: 10}} variant="success" onClick={() => onClickingEdit(tap.id) }>Update Tap</Button>
      <Button variant="danger" onClick={() => onClickingDelete(tap.id) }>Delete Tap</Button>
      <hr/>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPint: PropTypes.func
};

const mapStateToProps = (state, props) => {
  return ({
    tap: state.masterTapList[Object.values(props.tap)[0].id]
  });
}

export default connect(mapStateToProps)(TapDetail);