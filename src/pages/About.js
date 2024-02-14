import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  const userlist=[
    {
      "id":1,
      "name":"desh"
    },
    {
      "id":2,
      "name":"amit"
    },
    {
      "id":3,
      "name":"anita"
    }
  ]
  console.log("user",userlist);
  return (
    <>
    {
      userlist.map((useritem)=>(
        <li key={useritem.id}>
          <NavLink to={useritem.id.toString()}>{useritem.name}</NavLink>

        </li>
      ))
    }
    </>
  )
}

export default About;