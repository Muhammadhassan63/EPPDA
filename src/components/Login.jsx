import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.role === 'admin') {
        history.push('/admin');
      } else {
        history.push('/user');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;