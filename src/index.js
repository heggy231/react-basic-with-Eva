import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';


const Checkbox = () => {
  // useReducer(logic for second argment toggle function, inital state)
  const [checked, toggle] = useReducer(checked => !checked, false);
  
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
  <App />, 
  document.getElementById("root")
);
