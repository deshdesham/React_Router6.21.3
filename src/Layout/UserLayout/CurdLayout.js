import React from 'react'
import {Outlet } from 'react-router-dom';
import UserNavigation from './UserNavigation';

const CurdLayout = () => {
  return (

    <div className='w-fll flex h-full justify-center flex-col items-center'>
      <UserNavigation  />
      <Outlet />  
    </div>
  )
}

export default CurdLayout;