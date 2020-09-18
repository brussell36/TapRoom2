import React from "react";
import NewTapForm from "./NewTapForm";
import TapList from "./TapList";
import TapDetail from "./TapDetail";
import EditTapForm from './EditTapForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index';

class TapControl extends React.Component{

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.editFalse();
    const action2 = a.selectNoTap();
    const action3 = a.toggleForm();
    if(this.props.selectedTap != null){
      dispatch(action);
      dispatch(action2);
      dispatch(action3);
    } else {
      dispatch(action3);
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const action = a.addTap(newTap);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteTap(id);
    dispatch(action);
    const action2 = a.selectNoTap();
    dispatch(action2);
    const action3 = a.toggleForm();
    dispatch(action3);
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editTrue()
    dispatch(action);
  }

  handleEditingTapInList = (tapToEdit) => {
    const { dispatch } = this.props;
    const action = a.addTap(tapToEdit);
    dispatch(action);
    const action2 = a.editFalse()
    dispatch(action2);
  }

  handleDecreasePint = (id) => {
    const { dispatch } = this.props;
    const tap = this.props.masterTapList[id];
    if (tap.pints > 0) {
      const pour = tap.pints - 1;
      tap.pints = pour; 
      const action = a.addTap(tap)
      dispatch(action);
    }
  } 

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    console.log(selectedTap);
    const { dispatch } = this.props;
    const action = a.selectTap(selectedTap);
    const action2 = a.toggleForm();
    dispatch(action);
    dispatch(action2);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState = <EditTapForm 
        tap = {this.props.selectedTap}
        onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
    } else if (this.props.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap = {this.props.selectedTap}
        onClickingPint = {this.handleDecreasePint}
        onClickingEdit = {this.handleEditClick}
        onClickingDelete = {this.handleDeletingTap} />
      buttonText = "Return to Tap List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation = {this.handleAddingNewTapToList} />
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList 
        tapList = {this.props.masterTapList}
        onTapSelection = {this.handleChangingSelectedTap} />
      buttonText = "Add New Tap";
    }
    return(
      <div style={{ 
        textAlign: 'center',
        padding: '20px',
        }}>
        <React.Fragment>
          {currentlyVisibleState}
          <Button style={{margin: 10}} variant="primary" onClick={this.handleClick}>{buttonText}</Button>
        </React.Fragment>
      </div>
    );
  }
}

TapControl.propTypes = {
  masterTapList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedTap: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedTap: state.selectedTap
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;