import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

function EditTapForm(props){
  const { tap } = props;
  function handleEditTapFormSubmission(event){
    event.preventDefault();
    props.onEditTap({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: tap.id
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

const mapStateToProps = (state, props) => {
  return ({
    tap: state.masterTapList[Object.values(props.tap)[0].id]
  })
}

export default connect(mapStateToProps)(EditTapForm);