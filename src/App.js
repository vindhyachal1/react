import React, { useState } from 'react';

function InputBox({ index, isEnabled, handleInputChange, handleCheckboxChange }) {
  return (
    <div>
      <input type="text" disabled={!isEnabled} onChange={(event) => handleInputChange(index, event)} />
      <label>
        <input type="checkbox" checked={isEnabled} onChange={handleCheckboxChange} />
        Enabled
      </label>
    </div>
  );
}

function InputBoxes() {
  const [numInputs, setNumInputs] = useState(2);

  const handleInputChange = (index, event) => {
    // handle input change here
  };

  const handleAddInputs = () => {
    setNumInputs(numInputs + 2);
  };

  const [isEnabled, setIsEnabled] = useState(Array(numInputs).fill(false));

  const handleCheckboxChange = (index) => {
    const newEnabledState = [...isEnabled];
    newEnabledState[index] = !newEnabledState[index];
    setIsEnabled(newEnabledState);
  };

  const inputBoxes = [];
  for (let i = 0; i < numInputs; i++) {
    inputBoxes.push(
      <InputBox
        key={i}
        index={i}
        isEnabled={isEnabled[i]}
        handleInputChange={handleInputChange}
        handleCheckboxChange={() => handleCheckboxChange(i)}
      />
    );
  }

  return (
    <div>
      {inputBoxes}
      <button onClick={handleAddInputs}>Add Inputs</button>
    </div>
  );
}

export default InputBoxes;
