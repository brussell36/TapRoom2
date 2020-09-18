import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props){
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId= 'name'>
          <Form.Control 
            type="text"
            name="name"
            placeholder="Name of Beer"
            defaultValue={props.name} />
        </Form.Group>
        <Form.Group controlId= 'brand'>
          <Form.Control 
            type="text"
            name="brand"
            placeholder="Brand Name"
            defaultValue={props.brand} />
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Control 
            type="text"
            name="price"
            placeholder="Price of a Pint"
            defaultValue={props.price} />
        </Form.Group>
        <Form.Group controlId='alcoholContent'>
          <Form.Control 
            type="text"
            name="alcoholContent"
            placeholder="ABV"
            defaultValue={props.alcoholContent} />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="success" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string
};

export default ReusableForm;