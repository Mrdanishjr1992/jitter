import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
export default function LandingPage() {
  return (
    <div className='landing'>
      <h1 className='text-8xl text-red-800 font-bold'>Jitter</h1>
      <div className='landingContainer'>
        <section className='signup'>
          <LoginForm />
        </section>
        <section className='login'>
          <RegisterForm />
        </section>
      </div>
    </div>
  );
}
