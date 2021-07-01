import React, { useState, useEffect } from 'react';

function CreateMessage({ setRefresh }) {
  const [messageForm, setMessageForm] = useState({
    message: '',
    group: {},
    chat: {},
    user: {},
  });

  const handleChange = (event) => {
    event.preventDefault();
    setMessageForm((messageForm) => ({
      ...messageForm,
      message: event.target.value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    const obj = {
      ...messageForm,
      //   user: currentUser._id,
      //   group: currentGroup._id,
      //   chat: currentChat._id,
    };
    console.log(obj);
    fetch('https://jitter-api.herokuapp.com/message/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessageForm({
          message: '',
        });
        setRefresh(data.message);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div>
        <input
          name='text'
          className='form-control type_msg'
          placeholder='Type your message...'
          value={messageForm.message}
          onChange={handleChange}
        />
        <button onClick={(event) => handleSubmit(event)} type='submit'>
          Post
        </button>
      </div>
    </div>
  );
}

export default CreateMessage;
