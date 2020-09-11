import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props){
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control 
            type="text"
            name="name"
            placeholder="Name of Beer" />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type="text"
            name="brand"
            placeholder="Brand Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type="text"
            name="price"
            placeholder="Price of a Pint" />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type="text"
            name="alcoholContent"
            placeholder="ABV" />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type="text"
            name="pints"
            placeholder="Number of Pints" />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="outline-dark" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;