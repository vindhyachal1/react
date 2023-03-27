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
      <div className="header">Your Heading Text</div>
      <div className="form-container">
        <div className="form">
          <div className="left-column">
            {inputFields.slice(0, 2).map((inputField, index) => (
              <div key={index}>
                <label>{inputField.label}</label>
                <input type="text" value={inputField.value} onChange={(event) => handleInputChange(index, event)} />
              </div>
            ))}
            <button onClick={handleAddFields}>Add Inputs</button>
            <button onClick={() => setInputFields([{ label: 'Input 1', value: '' }, { label: 'Input 2', value: '' }])}>Reset</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          <div className="right-column">
            {inputFields.slice(2).map((inputField, index) => (
              <div key={index}>
                <label>{inputField.label}</label>
                <input type="text" value={inputField.value} onChange={(event) => handleInputChange(index + 2, event)} />
                <button onClick={() => handleRemoveFields(index + 2)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
