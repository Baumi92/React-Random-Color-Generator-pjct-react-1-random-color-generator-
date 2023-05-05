import './App.css';
import React, { useState } from 'react';

// useState hook from the react library, and a CSS file //
function ColorGenerator() {
  // Set the initial color to a random hexadecimal value

  // useState is a hook that adds state management functionality to a functional component. In this component, useState sets the initial color to a random hexadecimal value. //
  const [randomColor, setRandomColor] = useState(
    // When the button is clicked, set the color to a new random hexadecimal value
    '#' + Math.floor(Math.random() * 16777215).toString(16),
  );
  // The handleGenerateColor function generates a new random hexadecimal color value and sets it as the new state value for randomColor.
  function handleGenerateColor() {
    const newRandomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(newRandomColor);
  }
  // The JSX code uses the randomColor state value to set the background color of the color-generator element. //
  return (
    <div className="color-generator-container">
      <div className="color-generator" style={{ backgroundColor: randomColor }}>
        <h1>Random Color Generator</h1>
        <div className="generate-button-container">
          <button
            className="generate-button"
            // The onClick attribute for the button element calls the handleGenerateColor function when the button is clicked.
            onClick={handleGenerateColor}
          >
            Generate Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorGenerator;
