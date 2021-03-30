import React, { useState, useEffect } from 'react';

function CreateMessage() {
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

    fetch('https://jitter-api.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMessageForm({
          message: '',
        });
        // setRefresh(data.message);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='card-footer'>
      <div className='input-group mb-3 text-white'>
        <textarea
          name='text'
          className='form-control type_msg'
          placeholder='Type your message...'
          value={messageForm.message}
          onChange={handleChange}
        />
        <span
          onClick={handleSubmit}
          type='submit'
          className='input-group-text send_btn'
        >
          <i className='fas fa-location-arrow'></i>
        </span>
      </div>
    </div>
  );
}

export default CreateMessage;
