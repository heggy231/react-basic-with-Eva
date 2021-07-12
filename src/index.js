import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function GitHubUser({ login }) {
  // fetch data from github api https://api.github.com/users/m
  const [data, setData] = useState(null);
  useEffect(() => {
    // useEffect will fetch data
    const url = `https://api.github.com/users/${login}`;
    // prints result from `response.json()` in getRequest (https://gist.github.com/heggy231/3d54e3403edf78a3cb0b5436b851bfc8)
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error(error));
  }, []);

  if(data) {
  // user exists then outputs data in JSON string format
  // JSON.stringify(data, null, '\t') prints out better format
    return (
      <div>
        <h1>User Login: {data.login}</h1>
        <img src={data.avatar_url} width={70} />
        <h3>Number of Followers: {data.followers} 🌟</h3>
      </div>
    );
  }

  // if no user output null
  return null
}

// pop github users: fabpot andrew taylorotwell
function App() {
  return <GitHubUser login="andrew"/>
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
