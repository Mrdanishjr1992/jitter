import React from 'react';

const SideCar = () => {
  return (
    <div className='sidecar'>
      <h1 className='title'>Jitter</h1>
      <nav className='sideCont'>
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
          <a href='/#'>Profile</a>
        </li>
      </nav>
      <button className='btn btn-outline-success'>Post</button>
    </div>
  );
};

export default SideCar;
