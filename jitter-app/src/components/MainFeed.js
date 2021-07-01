import React, { useState, useEffect } from 'react';
import CreateMessage from './messages/CreateMessage';
import MessageCard from './messages/MessageCard';

const MainFeed = () => {
  const [messages, setMessages] = useState([]);
  const [refresh, setRefresh] = useState('');

  useEffect(() => {
    fetch(`https://jitter-api.herokuapp.com/message/index`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      });
  }, [refresh]);

  return (
    <div className='main-feed'>
      <span>
        <strong>#Feed-Name</strong>
      </span>
      <div className='feed-card'>
        <CreateMessage messages={messages} setRefresh={setRefresh} />
      </div>
      <div className='feed-card'>
        {messages.map((message, index) => {
          return (
            <MessageCard
              key={message._id}
              index={index}
              message={message}
              setRefresh={setRefresh}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainFeed;
