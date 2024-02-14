
import React from 'react'
import { NavLink, useLoaderData} from 'react-router-dom';


const User = () => {
//   const userlist=[
//     {
//       "id":1,
//       "name":"desh"
//     },
//     {
//       "id":2,
//       "name":"desham"
//     },
//     {
//       "id":3,
//       "name":"desham"
//     }
//   ]
//   console.log("user",userlist);
const Users=useLoaderData()
console.log(Users.data);

return (
    <>
    {
      Users.data.map((useritem)=>(
        <li key={useritem.id} className=' list-none w-full flex justify-center '>
          <NavLink to={useritem.id} className=" border-red mt-2 px-3 py-1 bg-black text-white  rounded-md "  >{useritem.firstName}</NavLink>
        </li>
      ))
    }

    </>
  )
}

export default User;


export const UserLoder=async()=>{
    const appId="65b7e0773709b4162e6d2104"
    const apiUrl = "https://dummyapi.io/data/v1/user?limit=10";

    
    try {
        const res = await fetch(apiUrl, {
            headers: {
                "app-id": appId,  // Fix the typo here
            },
        });

        if (!res.ok) {
            throw new Error("Couldn't fetch data");
        }

        return res.json();
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error so that the calling code can handle it
    }
    }