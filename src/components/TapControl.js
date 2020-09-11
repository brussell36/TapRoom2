import React from "react";
import NewTapForm from "./NewTapForm";
import TapList from "./TapList";
import TapDetail from "./TapDetail";
import EditTapForm from './EditTapForm';
import Button from 'react-bootstrap/Button';

class TapControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedTap != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false
    });
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    });
  }
}