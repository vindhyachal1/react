import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([
    { label: 'Input 1', value: '' },
    { label: 'Input 2', value: '' }
  ]);

  const handleAddFields = () => {
    const newFields = [];
    for (let i = 0; i < 5; i++) {
      newFields.push({ label: `Input ${inputFields.length + 1 + i}`, value: '' });
    }
    setInputFields([...inputFields, ...newFields]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input Fields', inputFields);
  };

  return (
    <div className="App">
      <div className="form">
        <div className="left-column">
          <h2>Left Column</h2>
          <div>
            <label>{inputFields[0].label}</label>
            <input type="text" value={inputFields[0].value} onChange={(event) => handleInputChange(0, event)} />
          </div>
          <div>
            <label>{inputFields[1].label}</label>
            <input type="text" value={inputFields[1].value} onChange={(event) => handleInputChange(1, event)} />
          </div>
          <button onClick={handleAddFields}>Add Inputs</button>
          <button onClick={() => setInputFields([{ label: 'Input 1', value: '' }, { label: 'Input 2', value: '' }])}>Reset</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="right-column">
          <h2>Right Column</h2>
          {inputFields.slice(2).map((inputField, index) => (
            <div key={index}>
              <label>{inputField.label}</label>
              <input type="text" value={inputField.value} onChange={(event) => handleInputChange(index + 2, event)} />
              <button onClick={() => handleRemoveFields(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
