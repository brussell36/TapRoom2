import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTapForm(props) {

  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler = {handleNewTicketFormSubmission}
        buttonText = "Beer!" />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm;