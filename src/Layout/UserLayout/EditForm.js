import React from 'react'
import { Form } from 'react-router-dom'

const EditForm = ({Udata}) => {
    

  return (
    <div className='mt-4 flex items-center justify-center flex-col'>

        <div className='border w-60 flex flex-col justify-center mx-3 items-center rounded-md bg-sky-100'>
          <h1 className='text-2xl border rounded-t-md unset-0 w-full mb-2 bg-orange-500 items-center justify-center flex'>User Edit</h1>
      
        <Form method="PUT" action='' className=' items-center justify-center flex flex-col ' >
        <div className='form-group flex flex-col'>
            {/* <label className=' font-bold text-amber-300 mb-2 '>Email:</label> */}
            <img  src={Udata.picture} alt={Udata.picture} className='mb-2  border p-2 rounded-full'/>
        </div>
        <div className='form-group flex flex-col'>
            <label className=' font-bold text-amber-300 mb-2 '>Email:</label>
            <input type="text" name="email" defaultValue={Udata.email} className='mb-2  border p-2 rounded-md'/>
        </div>
        <div  className='form-group flex flex-col'>
          <label className='mb-2 font-bold text-amber-300'>FirstName:</label>
          <input type="text" name="firstName" defaultValue={Udata.firstName} className='mb-2 border p-2 rounded-md'/>
        </div>
        <div  className='form-group flex flex-col'>
          <label className='mb-2 font-bold text-amber-300'>LastName:</label>
          <input type="text" name="lastName" defaultValue={Udata.lastName} className='mb-2 border p-2 rounded-md'/>
        </div>
        <button className=' px-4 pt-2 pb-2 rounded-md m-4 font-bold border all:unset border-green-600 py-2 text-sm text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 hover:bg-green-300 hover:text-white transition-all delay-400 ease-in-out '>Submit</button>

        
      </Form>
    </div>
    </div>
  )
}

export default EditForm;

