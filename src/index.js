import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  
  function toggle() {
    setChecked(checked => !checked)
  }
  
  return (
    <>
      <input 
      type="checkbox" 
      value={checked} 
      onChange={toggle} />
      {checked ? "I want" : "no I don't"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />, 
  document.getElementById("root")
);
