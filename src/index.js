import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return (
    <div>
      <h1>🏊‍♀️🏖🏝 Visit Jenny Lake!</h1>
    </div>
  );
}

function SkiResort() {
  return (
    <div>
      <h1>🏒⛸🧊 Visit Jackson Hole Mountain Resort!</h1>
    </div>
  );
}

function App(props) {
  console.log('props', props);  // props => {season: "summer"}
  // conditional when summer
  if(props.season === "summer")
  return null;
}

ReactDOM.render(
  <App season="summer" />, 
  document.getElementById("root")
);
