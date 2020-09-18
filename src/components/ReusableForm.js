import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props){
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId= 'tapName'>
          <Form.Control 
            type="text"
            name="name"
            placeholder="Name of Beer"
            defaultValue={props.tapName} />
        </Form.Group>
        <Form.Group controlId= 'tapBrand'>
          <Form.Control 
            type="text"
            name="brand"
            placeholder="Brand Name"
            defaultValue={props.tapBrand} />
        </Form.Group>
        <Form.Group controlId='tapPrice'>
          <Form.Control 
            type="text"
            name="price"
            placeholder="Price of a Pint"
            defaultValue={props.tapPrice} />
        </Form.Group>
        <Form.Group controlId='tapAlcoholContent'>
          <Form.Control 
            type="text"
            name="alcoholContent"
            placeholder="ABV"
            defaultValue={props.tapAlcoholContent} />
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
  buttonText: PropTypes.string,
  tapName: PropTypes.string,
  tapBrand: PropTypes.string,
  tapPrice: PropTypes.string,
  tapAlcoholContent: PropTypes.string
};

export default ReusableForm;