import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return (
    <h1>🏊‍♀️🏖🏝 Visit Lake!</h1>
  );
}

function SkiResort() {
  return (
    <h1>🏒⛸🧊 Visit Ski Resort!</h1>
  );
}

function App({ season }) {
  return (
    <>
      <Lake />
      <SkiResort />
    </>
  );
}

ReactDOM.render(
  <><Lake /><SkiResort /></>, 
  document.getElementById("root")
);
