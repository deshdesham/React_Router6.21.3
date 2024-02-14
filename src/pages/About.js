import React, { useState, Suspense } from 'react';
import { Await, useSearchParams } from 'react-router-dom';

const About = () => {
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState(fetch(`http://localhost:5000/User?${params.toString()}`).then(response => response.json()));

  const handleChange = (e) => {
    const updatedParams = new URLSearchParams(params);
    updatedParams.set(e.target.name, e.target.value);
    setParams(updatedParams);
    setData(fetch(`http://localhost:5000/User?${updatedParams.toString()}`).then(response => response.json()));
  };

  return (
    <div className='flex flex-col justify-center mt-8 items-center'>
      <div className="w-full md:w-1/3">
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Search.."
          name='q'
          value={params.get('q') || ''}
          onChange={handleChange}
        />
      </div>

      <Suspense fallback={<div>Loading...</div>}>

        {/* use axios <Await resolve={Axios.get("url")} errorElement={<div>Could not load users 😬</div>}> */}
         <Await resolve={data} errorElement={<div>Could not load users 😬</div>}>

          {users => users.map((user) => (
            <div key={user.id} className='mt-3 flex flex-col border p-6 rounded-md bg-green-300'>
              {user.firstName}
              <hr />
              {user.email}
              <hr />
              {user.id}
              <hr className='mt-3 border-gray-500 rounded-md border font-7 ' />
            </div>
          ))}
        </Await>
      </Suspense>
    </div>
  );
};

export default About;
