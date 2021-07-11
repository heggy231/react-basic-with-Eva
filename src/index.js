import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [ status, setStatus ] = useState("Open");
  return (
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
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
