import React from 'react'
import { NavLink } from 'react-router-dom';

const UserNavigation = () => {
  return (
        <nav className='mt-3 mb-3'>
            <NavLink to="" className=" mr-2 px-4 py-2 bg-green-300 text-black font-bold rounded-md" >User</NavLink>
            <NavLink to="newuser" className=" mr-2 px-4 py-2 bg-green-300 text-black font-bold rounded-md " >New User</NavLink>
        </nav>
        
    
  )
}

export default UserNavigation;