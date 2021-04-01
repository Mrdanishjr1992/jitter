import React from 'react';

const SideCar = () => {
  return (
    <div className='sidecar'>
      <h1 className='title'>Jitter</h1>
      <aside>
        <nav>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>Explore</a>
          </li>
          <li>
            <a href='/#'>Notifications</a>
          </li>
          <li>
            <a href='/#'>Messages</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/register'>SignUp</a>
          </li>
        </nav>
      </aside>
      <button>Post</button>
    </div>
  );
};

export default SideCar;
