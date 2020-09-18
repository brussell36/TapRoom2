import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm(props){
  const { tap } = props;
  function handleEditTapFormSubmission(event){
    event.preventDefault();
    props.onEditTap({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: Object.values(tap)[0].pints,
      id: Object.values(tap)[0].id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Update Tap" />
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  onEditTap: PropTypes.func,
  tap: PropTypes.object
};

export default EditTapForm;