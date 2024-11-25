import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/**
 * This component is a simple counter game built with React. It displays
 * a counter and provides two buttons to increment and decrement the counter.
 * The counter starts at 0. Attempting to decrement the counter below 0 will
 * trigger an alert indicating that the counter is at 0.
 */
function App() {
  const [count, setCount] = useState(0);
  /**
   * Increment the counter by one.
   */

  const adddValue = () => {
    setCount(count + 1);
  };
  /**
   * Decrement the counter by one. If the counter is already at 0,
   * an alert box will appear with the message "Counter is 0".
   */
  const removeValue = () => {
    if (count - 1 < 0) {
      alert("Counter is 0");
      return;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>This is a Counter Game</h1>
      <button onClick={adddValue}>Add Value</button>
      {"      "}
      <button onClick={removeValue}>Remove Value</button>
      <h3>Counter : {count}</h3>
    </>
  );
}

export default App;
