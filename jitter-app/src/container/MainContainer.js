import React from 'react';
import MainFeed from '../universalComponents/MainFeed';
import SideCar from '../universalComponents/SideCar';

const MainContainer = () => {
  return (
    <div>
      <SideCar />
      <MainFeed />
    </div>
  );
};

export default MainContainer;
