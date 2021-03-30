import React from 'react';
import CreateMessage from '../pages/messages/CreateMessage'
const MainFeed = () => {
  return (
    <div className='main-feed'>
      <span>
        <strong>#Feed-Name</strong>
      </span>
      <CreateMessage />
      <button>post</button>
      <p className='feed-card'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis ea laudantium consequatur soluta dicta! Aliquid doloribus
        mollitia ducimus eligendi.
      </p>
      <p className='feed-card'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis ea laudantium consequatur soluta dicta! Aliquid doloribus
        mollitia ducimus eligendi.
      </p>
      <p className='feed-card'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        blanditiis ea laudantium consequatur soluta dicta! Aliquid doloribus
        mollitia ducimus eligendi.
      </p>
    </div>
  );
};

export default MainFeed;
