import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const RightSection = () => {
  const [inputs, setInputs] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleAddInput = () => {
    setInputs([...inputs, { id: inputs.length }]);
  };

  const handleRemoveInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const handleCheckboxChange = (event) => {
    setIsDisabled(!isDisabled);
  };

  const renderRemoveButton = (input) => {
    if ((input.id + 1) % 5 === 0) {
      return (
        <Form.Group as={Col}>
          <Button
            variant="danger"
            onClick={() => handleRemoveInput(input.id)}
          >
            Remove
          </Button>
        </Form.Group>
      );
    }
    return null;
  };

  return (
    <div>
      <h3>Right Section</h3>
      <Form>
        <Form.Group controlId="formCheckbox">
          <Form.Check type="checkbox" label="Enable/Disable input boxes" onChange={handleCheckboxChange} />
        </Form.Group>
        {inputs.map((input) => (
          <Form.Row key={input.id}>
            <Form.Group as={Col} controlId={`label${input.id}`}>
              <Form.Label>{`Label ${input.id + 1}`}</Form.Label>
              <Form.Control type="text" placeholder={`Enter label ${input.id + 1}`} disabled={isDisabled} />
            </Form.Group>
            <Form.Group as={Col} controlId={`input${input.id}`}>
              <Form.Label>{`Input ${input.id + 1}`}</Form.Label>
              <Form.Control type="text" placeholder={`Enter input ${input.id + 1}`} disabled={isDisabled} />
            </Form.Group>
            {renderRemoveButton(input)}
          </Form.Row>
        ))}
        <Button variant="primary" onClick={handleAddInput}>
          Add Input Box
        </Button>
        <Button variant="primary" type="submit" className="ml-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RightSection;
