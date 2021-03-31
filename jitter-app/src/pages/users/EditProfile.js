import React, { useState } from 'react';

function EditProfile({ setEditCurrentUser, editCurrentUser, setRefresh }) {
  const user = editCurrentUser;

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  function handleSubmit(event) {
    console.log(editCurrentUser);

    event.preventDefault();
    const obj = {
      ...user,
      userName: name || user.userName,
      about: about || user.about,
    };
    fetch(`https://jitter-api.herokuapp.com/users/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEditCurrentUser(null);
        setRefresh(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className='p-4' onSubmit={handleSubmit}>
      <div className='card d-flex align-items-center'>
        <div className='cardHeader'>User Info</div>
        <hr />
        <div className='cardBody d-flex align-items-center flex-column'>
          <div className='inputGroup text-center'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Edit Username ...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div className='inputGroup text-center'>
            <label htmlFor='about'>About:</label>
            <input
              type='text'
              name='about'
              id='about'
              placeholder='about ...'
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          <hr />
          <div className='d-flex align-items-evenly'>
            <button
              className='btn btn-info'
              onClick={() => setEditCurrentUser(null)}
            >
              Back
            </button>{' '}
            <button className='btn btn-warning' type='submit'>
              Update Info?
            </button>
          </div>
        </div>
        <br />
      </div>
    </form>
  );
}

export default EditProfile;
