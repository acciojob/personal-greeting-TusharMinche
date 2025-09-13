import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Hello {name}!</p>}
    </div>
  );
};

export default App;
