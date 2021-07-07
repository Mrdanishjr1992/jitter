import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setError('All fields are required');
    }

    const userObj = { email, password };

    fetch('https://jitter-api.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEmail('');
        setPassword('');
        if (data.error) {
          setError(data.error);
        } else {
          // Store Token in localStorage
          localStorage.setItem('token', data.token);
          // Update authState in App.js
          // setToken(data.token);
          history.push('/home');
        }
      })
      .catch((err) => {
        return setError(err.message);
      });
  };
  return (
    <div className='landing-form'>
      <h2 className='text-black text-2xl text-center mb-1'>Login</h2>
      <form className='flex flex-col w-full mt-2' onSubmit={loginSubmit}>
        {error && (
          <h2 className='text-red-700 bg-yellow-100 rounded-md text-center p-2 m-2'>
            {error}
          </h2>
        )}
        <div className='flex flex-col rounded bg-green-400 text-black border-black border-2  p-2 m-2'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col rounded bg-green-400 text-black border-black border-2  p-2 m-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='my-1 mx-auto'>
          <button
            className='btn hover:bg-green-400 rounded border-green-400 text-black border p-2'
            type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
