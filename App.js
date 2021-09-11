//import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from "react";


function App() {
  const [show, newShow] = useState(false);
  return (
    <div className="App">
      <button id="click" onClick={() => {
        newShow(true);
      }}>Render Paragraph</button>
      {show && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}

export default App;
