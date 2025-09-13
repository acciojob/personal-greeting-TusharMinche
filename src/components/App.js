import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  const handleInput = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Enter your name:</label>
      <input id="username" type="text" onChange={handleInput} />
      <p>{name ? `Hello, ${name}!` : ''}</p>
    </div>
  );
};

export default App;
