import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <p className="px-5 py-5">Click the Button to Change the baground</p>
        <button
          className="px-5 py-5 border-x-4 border-y-4 border-neutral-950 bg-blue-500"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>{" "}
        {"  "}
        <button
          className="px-5 py-5 border-x-4 border-y-4 border-neutral-950 bg-red-500"
          onClick={() => setColor("red")}
        >
          Red
        </button>{" "}
        {"  "}
        <button
          className="px-5 py-5 border-x-4 border-y-4 border-neutral-950 bg-green-500"
          onClick={() => setColor("green")}
        >
          Green
        </button>
      </div>
    </>
  );
}

export default App;
