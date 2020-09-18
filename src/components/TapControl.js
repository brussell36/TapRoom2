import React from "react";
import NewTapForm from "./NewTapForm";
import TapList from "./TapList";
import TapDetail from "./TapDetail";
import EditTapForm from './EditTapForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TapControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedTap: null,
      editing: false,
    };
  }

  handleClick = () => {
    if(this.state.selectedTap != null){
      this.setState({
        selectedTap: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, pints, id } = newTap;
    const action = {
      type: 'ADD_TAP',
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TAP',
      id
    }
    dispatch(action);
    this.setState({ selectedTap: null });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, price, alcoholContent, pints, id } = tapToEdit
    const action = {
      type: 'ADD_TAP',
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTap: null
    });
  }

  handleDecreasePint = (id) => {
    const tap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    if (tap.pints > 0) {
      tap.pints--;
    }
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tap);
    this.setState({
      masterTapList: editedMasterTapList,
      editing: false,
    });
  } 

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTapForm 
        tap = {this.state.selectedTap}
        onEditTap = {this.handleEditingTapInList} />
      buttonText = "Return to Tap List";
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap = {this.state.selectedTap}
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
  formVisibleOnPage: PropTypes.func
}

const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;