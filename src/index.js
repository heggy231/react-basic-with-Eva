import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input onChange={() => setChecked(checked => !checked)} type="checkbox" value={checked} />
      {checked ? "I want" : "No, I don't"}
    </>
  );
}

ReactDOM.render(
  <Checkbox />, 
  document.getElementById("root")
);
