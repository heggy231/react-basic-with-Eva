import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Checkbox() {
  const [checked, setCheckbox] = useState(false);

  // bad
  // alert(`checked: ${checked.toString()}`);

  // good decouple DOM, component rendering
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input 
        type="checkbox"
        value={checked} 
        onChange={() => setCheckbox( checked => !checked )}
      />
      { checked ? "checked" : "not checked" }
    </>
  );
}

ReactDOM.render(
  <Checkbox />, 
  document.getElementById("root")
);
