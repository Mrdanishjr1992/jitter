import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

function RegisterPage() {
  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState(null);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password || !passwordCheck) {
      return setError('All fields are required');
    }

    if (password !== passwordCheck) {
      return setError('Passwords do not match');
    }
    if (password.length < 4)
      return setError('The Password must be at least 4 characters long');

    const newUser = {email, password};

    fetch('https://jitter-api.herokuapp.com/user/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        setError(response.statusText);
      })
      .then((data) => {
        console.log(data);
        history.push('/login');
      })
      .catch((err) => setError(err.message));
  }

  return (
    // ============================ Regster From BootSnip ===================
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRElOVFqbn-rDlFHWyau6pPn09AYUtlBdew&usqp=CAU'
            id='icon'
            alt='User Icon'
          />
        </div>
        {error && <h2>{error} </h2>}
        <form onSubmit={handleSubmit}>
          {/* <input
            type='text'
            id='userName'
            name='userName'
            placeholder='username'
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          /> */}
          <input
            type='email'
            id='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type='password'
            id='passwordCheck'
            name='passwordCheck'
            placeholder='Confirm Password'
            value={passwordCheck}
            onChange={(event) => setPasswordCheck(event.target.value)}
          />
          <input type='submit' value='Register' />
        </form>

        <div id='formFooter'>
          <a className='underlineHover' href='/register'>
            Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
