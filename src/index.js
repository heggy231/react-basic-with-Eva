import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function GitHubUsers() {
  // fetching data from https://api.github.com/users
  const [data, setData] = useState(null);
  
  // introduce side-effect fetch api call but wrap
  //  inside of useEffect to decouple, second optional 
  //  empty dependency array to only render when component mounts to virtual DOM
  useEffect(() => {
    // fetching github users data`https://api.github.com/users`;
    const url = 'https://api.github.com/users';
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(error => console.error(error));
  }, []);
  
  if(data) {
    // console.log('data', data);
    return (
      data.map((user, index) => 
        <div key={index}>
          <h1>User Login: {user.login}</h1>
          <img src={user.avatar_url} alt={user.login} width={70} />
          <a href={user.html_url} target="_blank" rel="noreferrer"><h3>{user.login}'s Github Homepage 🌟</h3></a>
        </div>
      )
    );
  }
  
  // if there is no user data returned from api call
  return null;
}

// pop github users: fabpot andrew taylorotwell
function App() {
  return <GitHubUsers />
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
