import React, { useState, useEffect } from 'react';

function MessageCard({ index, message, setRefresh }) {
  function deleteMessage(id) {
    fetch(`https://jitter-api.herokuapp.com/message/${message._id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefresh(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <span>{message.body}</span>

      <button onClick={() => deleteMessage(message._id)}>Delete</button>
    </>
  );
}

export default MessageCard;
