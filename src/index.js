import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Greet({ name }) {
  const message = `Hello, ${name}!`; // calc Output

  // BAD!  perform side-effects directly in the body of the component. sets title inside of head html
  alert(document.title); // => react app
  document.title = 'KDrama';
  alert(`after change title: ${document.title}`)  // => KDrama then the component finally shows "Hello, Heggy!"

  return (
    <div>
      {message}
    </div>
  );
}

ReactDOM.render(
  <Greet name="Heggy" />, 
  document.getElementById("root")
);
