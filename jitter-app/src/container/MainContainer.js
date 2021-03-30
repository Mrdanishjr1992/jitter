import React from 'react';
import MainFeed from '../universalComponents/MainFeed';
import SideCar from '../universalComponents/SideCar';
import SideGroup from '../universalComponents/SideGroup';

const MainContainer = () => {
  return (
    <div className='mainCont'>
      <SideCar />
      <MainFeed />
      <SideGroup />
    </div>
  );
};

export default MainContainer;
