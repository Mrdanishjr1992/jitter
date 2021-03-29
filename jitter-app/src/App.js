import React, { useState } from 'react';
import Routes from './config/routes';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Routes token={token} setToken={setToken} />
    </>
  );
}

export default App;
