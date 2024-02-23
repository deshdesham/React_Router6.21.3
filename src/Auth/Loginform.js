import React from 'react'
import { Form, NavLink,useSearchParams } from 'react-router-dom';

const Loginform = () => {
  const [params]=useSearchParams()
  const isLogin=params.get("mode")==="login";
  // console.log(params.get);

  return (
    <div className='w-full grid place-items-center border'>
      <h5>{isLogin?"Loin":"Register"}</h5>
    <Form method='POST' className='border flex w-[240px] mt-6 bg-slate-100 rounded-sm flex-col items-center justify-center mb-3 '>
    
    <div className='form-group flex flex-col mt-2 mb-2'>
        <label className='mb-2'>UserName:</label>
        <input type='text' name='username' className='border rounded-md'/>
    </div>
        {/* {errors?.email && <span className='text-red-500'>{errors.email}</span>} */}
    <div className='form-group flex flex-col mt-2 mb-2'>
        <label className='mb-2'>Password:</label>
        <input type='text' name='password' className='border rounded-md'/>
    </div>
        {/* {errors?.email && <span className='text-red-500'>{errors.email}</span>} */}
        <button type='submit' className='mb-2 mt-2 border px-4 py-2 rounded-md font-bold bg-green-300' >{isLogin?"Login":"Signup"}</button>
    </Form>
    <NavLink to={`?mode=${isLogin?"signup":"login"}`}>
      {isLogin?"Need Account":"Already a User"}
      </NavLink>
    </div>
  )
}

export default Loginform;