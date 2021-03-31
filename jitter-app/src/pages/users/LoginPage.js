import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function LoginPage({ setToken }) {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password || !passwordCheck) {
      return setError('All fields are required');
    }

    if (password !== passwordCheck) {
      return setError('Passwords do not match');
    }

    const userData = { email, password };

    fetch('https://jitter-api.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        return setError(response.statusText);
      })
      .then((data) => {
        console.log(data);
        // Update authState in App.js
        setToken(data.token);
        // Store Token in localStorage
        localStorage.setItem('token', data.token);
        // Redirect user profile page
        history.push('/profile');
      })
      .catch((err) => setError(err.message));
  }
  return (
    // ============================ Login From BootSnip ===================
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <div className=''>
          <img
            src='https://t3.ftcdn.net/jpg/00/63/74/62/360_F_63746248_ikHL5mQRmKXeWumLZk7ABJ9PT80VXjW5.jpg'
            id='icon'
            alt='User Icon'
          />
        </div>
        {error && <h2>{error} </h2>}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            id='email'
            className=''
            name='email'
            placeholder='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type='password'
            id='password'
            className=''
            name='password'
            placeholder='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type='password'
            id='passwordCheck'
            className=''
            name='passwordCheck'
            placeholder='Confirm Password'
            value={passwordCheck}
            onChange={(event) => setPasswordCheck(event.target.value)}
          />
          <input type='submit' value='Log In' />
        </form>

        <div id='formFooter'>
          <a className='underlineHover' href='/login'>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
