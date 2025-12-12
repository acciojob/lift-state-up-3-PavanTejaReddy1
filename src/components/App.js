
import React from "react";
import './../styles/App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child1 setSelectedOption={setSelectedOption} />
      <Child2 setSelectedOption={setSelectedOption} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default App;
