import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EditProfile from './EditProfile';

function ProfilePage({ token }) {
  const [refresh, setRefresh] = useState('');
  const [editCurrentUser, setEditCurrentUser] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  console.log('Token = ', typeof token);

  useEffect(() => {
    const token = {
      token: localStorage.getItem('token'),
    };
    if (token.token) {
      fetch('https://jitter-api.herokuapp.com//users/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            return response.json();
          }
          setError(error);
        })
        .then((data) => {
          if (!user) setUser(data.profile);

          console.log('user', user);
        })
        .catch((err) => console.log(err));
    } else {
      history.push('/login');
    }
  }, [token, error, history, refresh, editCurrentUser]);

  function handleDelete() {
    fetch(`https://evening-mesa-39907.herokuapp.com/users/${user._id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        return setError(response.statusText);
      })
      .then((data) => {
        console.log(data);

        localStorage.removeItem('token');
        // Redirect user profile page
        history.push('/');
      })
      .catch((err) => setError(err.message));
  }
  return (
    <>
      {editCurrentUser ? (
        <div className='d-flex justify-content-center mt-5'>
          <EditProfile
            setRefresh={setRefresh}
            setEditCurrentUser={setEditCurrentUser}
            editCurrentUser={editCurrentUser}
          />
        </div>
      ) : (
        <div className='text-center d-flex justify-content-center profileContainer'>
          <div className='card'>
            <h2 className='profileTitle'>Profile Page</h2>
            <p className='profilePara'>
              <strong>Username: </strong> {user && user.userName}
            </p>
            <hr />
            <p className='profilePara'>
              <strong>Email: </strong> {user && user.email}
            </p>
            <hr />
            <p className='profilePara'>
              <strong>About: </strong> {user && user.about}
            </p>
            <hr />
            <button
              className='btn btn-dark profileDeleteBtn'
              onClick={() => handleDelete(user._id)}
            >
              Delete Account
            </button>

            <hr />
            <button
              className='btn btn-primary profileDeleteBtn'
              onClick={() => setEditCurrentUser(user)}
            >
              Edit Account
            </button>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
