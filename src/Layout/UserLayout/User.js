
import React from 'react'
import { NavLink, Outlet, useRouteLoaderData} from 'react-router-dom';

const User = () => {
  const data = useRouteLoaderData("root");

  return (
    <div className='border-gray-500 md:w-full grid grid-cols-4 gap-3'>
      {data.map((item) => (
        <div key={item.id}>
          <div className='rounded-md mx-auto mt-6 mx-3 border rounded-md grid justify-center text-center backdrop-blur-md bg-slate-200'>
            <img src={item.picture} className='w-[200px] mx-auto mb-2' alt={`${item.firstName} ${item.lastName}`} />
            <NavLink to={item.id} key={item.id} className=" font-bold text-teal-600 ">{item.firstName}</NavLink>
          </div>
        </div>
      ))}
      {/* <Outlet /> */}
    </div>
  );
};

export default User;

export const UserLoder = async () => {
  const apiUrl = "http://localhost:5000/User";

  try {
    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Couldn't fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};


