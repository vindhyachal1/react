import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const LeftSection = ({ handleAddFields, handleSubmit }) => {
  return (
    <div className="col-md-6">
      <h3>Left Section</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="label1">
          <Form.Label>Label 1</Form.Label>
          <Form.Control type="text" placeholder="Enter label 1" />
        </Form.Group>
        <Form.Group controlId="input1">
          <Form.Label>Input 1</Form.Label>
          <Form.Control type="text" placeholder="Enter input 1" />
        </Form.Group>
        <Form.Group controlId="label2">
          <Form.Label>Label 2</Form.Label>
          <Form.Control type="text" placeholder="Enter label 2" />
        </Form.Group>
        <Form.Group controlId="input2">
          <Form.Label>Input 2</Form.Label>
          <Form.Control type="text" placeholder="Enter input 2" />
        </Form.Group>
        {Array.from(Array(2)).map((e, i) => (
          <Form.Group controlId={`label${i + 3}`} key={`label${i + 3}`}>
            <Form.Label>{`Label ${i + 3}`}</Form.Label>
            <Form.Control type="text" placeholder={`Enter label ${i + 3}`} />
          </Form.Group>
        ))}
        {Array.from(Array(2)).map((e, i) => (
          <Form.Group controlId={`input${i + 3}`} key={`input${i + 3}`}>
            <Form.Label>{`Input ${i + 3}`}</Form.Label>
            <Form.Control type="text" placeholder={`Enter input ${i + 3}`} />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleAddFields}>
          Add Input Box
        </Button>
        <Button variant="primary" type="submit" className="ml-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LeftSection;
