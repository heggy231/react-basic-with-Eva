import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input 
      type="checkbox" 
      value={checked} 
      onChange={() => setChecked(checked => !checked)} />
      {checked ? "I want" : "no I don't"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />, 
  document.getElementById("root")
);
