import React, { useState } from 'react';

export default function RegisterForm(setToggleForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const registerSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      return setError('All fields are required');
    }
    if (password !== confirm) {
      return setError('Passwords didnt match!');
    }

    const userObj = { email, password, confirm };

    fetch('https://jitter-api.herokuapp.com/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setEmail('');
        setPassword('');
        if (jsonData.error) {
          setMessage('');
          setError(jsonData.error);
        } else {
          setError('');
          setMessage('Account Created!');
          setToggleForm(true);
        }
      })
      .catch((error) => {
        return setError(error.message);
      });
  };

  return (
    <div className='landing-form'>
      <h2 className='text-black text-2xl text-center mb-2'>Register</h2>
      <form className='flex flex-col w-full' onSubmit={registerSubmit}>
        {error && <h2 className='text-red-700 text-center p-2'>{error}</h2>}
        {message && <h2 className='text-green-700'>{message}</h2>}
        <div className='flex flex-col bg-green-400 rounded text-black border-black border-2 p-2 m-2'>
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
        <div className='flex flex-col bg-green-400 rounded text-black border-black border-2 p-2 m-2'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col bg-green-400 rounded text-black border-black border-2 p-2 m-2'>
          <label htmlFor='confirm'>Confirm Password</label>
          <input
            type='password'
            name='confirm'
            id='confirm'
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>
        <div className='my-1 mx-auto'>
          <button
            className='btn hover:bg-green-400 rounded border-green-400 text-black border p-2'
            type='submit'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
