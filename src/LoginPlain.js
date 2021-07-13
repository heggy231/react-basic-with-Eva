import React, { useState } from 'react';
import { login } from './utils';

export const LoginPlain = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();

    setIsLoading(true); // start
    setError('');

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
      setError('Incorrect username of password!');
    }

    setIsLoading(false) // done
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (<><h1>Hello {username}! 🍔🍟</h1></>) : 
          (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input type="text" placeholder="username" 
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input 
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </form>
          )
        }
      </div>
    </div>
  )
}
