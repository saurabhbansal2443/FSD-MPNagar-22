import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  // let counter = 0
  const minus = () => {
    setCounter(counter - 1);
    // counter = counter-1
   ` console.log(counter);`
  };
  const plus = () => {
    setCounter(counter + 1);
    // counter = counter+1
    console.log(counter);
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "20%" }}
    >
      <button onClick={plus}>Plus</button>
      <h1>{counter}</h1>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default App;
