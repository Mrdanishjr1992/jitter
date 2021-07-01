import React from 'react';
import MainFeed from '../components/MainFeed';
import SideCar from '../components/SideCar';
import SideGroup from '../components/SideGroup';

export default function Homepage() {
  return (
    <div className='mainCont'>
      <SideCar />
      <MainFeed />
      <SideGroup />
    </div>
  );
}
