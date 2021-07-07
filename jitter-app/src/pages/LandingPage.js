import React, { useState, useEffect } from 'react';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
export default function LandingPage() {
  const [toggleForm, setToggleForm] = useState(true);
  const toggle = () => {
    if (toggleForm) {
      setToggleForm(false);
    } else {
      setToggleForm(true);
    }
  };
  useEffect(() => {
    if (toggleForm === false) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('register').style.display = 'flex';
    } else {
      document.getElementById('login').style.display = 'flex';
      document.getElementById('register').style.display = 'none';
    }
  }, [toggleForm]);
  return (
    <div className='landing'>
      <h1 className='hero text-8xl text-red-800 font-bold'>Jitter</h1>
      <div className='landingContainer'>
        <section id='register' className='signup'>
          <LoginForm />
        </section>
        <section id='login' className='login'>
          <RegisterForm setToggleForm={setToggleForm} />
        </section>
        <div>
          {toggleForm ? (
            <button className='link' onClick={() => toggle()}>
              Login
            </button>
          ) : (
            <button className='link' onClick={() => toggle()}>
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
