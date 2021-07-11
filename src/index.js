import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState("Alex");
  const [ status, setStatus ] = useState("Open");
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>
          Increment a Year
        </button>
        <button onClick={() => setYear(year - 1)}>
          Decrement a Year
        </button>
        <button onClick={() => setYear(2050)}>
          Reset back to 2050
        </button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Heggy")}>
          New Manager
        </button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("☀️ Open")}>
          ☀️Open
        </button>
        <button onClick={() => setStatus("⏲ Back in 5")}>
          ⏲Back in 5
        </button>
        <button onClick={() => setStatus("🏨🌴🌊 Vacation")}>
          🏨🌴🌊Vacation
        </button>
        <button onClick={() => setStatus("🌙 Closed")}>
          🌙Closed
        </button>
      </div>
    </>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
