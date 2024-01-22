import { useState } from "react";
import Main from "./components/Main";
import "./App.css";

function App() {
  const [direction, setDirection] = useState("top");

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  return (
    <div className="App">
      <select id="menu" onChange={handleDirectionChange} value={direction}>
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
      <Main direction={direction} />
    </div>
  );
}

export default App;
