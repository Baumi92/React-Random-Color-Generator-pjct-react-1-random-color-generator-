import './App.css';
import React, { useState } from 'react';

function ColorGenerator() {
  // Set the initial color to a random hexadecimal value

  const [randomColor, setRandomColor] = useState(
    // When the button is clicked, set the color to a new random hexadecimal value
    '#' + Math.floor(Math.random() * 16777215).toString(16),
  );

  function handleGenerateColor() {
    const newRandomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(newRandomColor);
  }

  return (
    <div className="color-generator-container">
      <div className="color-generator" style={{ backgroundColor: randomColor }}>
        <h1>Random Color Generator</h1>
        <div className="generate-button-container">
          <button className="generate-button" onClick={handleGenerateColor}>
            Generate Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorGenerator;
