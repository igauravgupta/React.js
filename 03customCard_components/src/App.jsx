import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Card name="Gaurav" img="https://randomuser.me/api/portraits/men/1.jpg" />
    </>
  );
}

export default App;
