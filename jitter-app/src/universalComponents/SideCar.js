import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to='/profile'>Profile</Link>
          </li>
        </nav>
      </aside>
      <button>Post</button>
    </div>
  );
};

export default SideCar;
