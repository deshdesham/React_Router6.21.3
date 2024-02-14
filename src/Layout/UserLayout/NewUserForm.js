import React from 'react'
import { Form } from 'react-router-dom';

const NewUserForm = () => {
    // const inputRef=useRef(null)
    // const imageRef=useRef(null)
  
    // const handlechange=(event)=>{
    //   console.log(event);
    //   const file = event.target.files[0];
    //   const fileSize = file.size; // size in bytes
    //   const maxSizeInBytes = 50 * 1024; // 50KB
    //   if (fileSize > maxSizeInBytes) {
    //     alert('Please select an image smaller than 50KB.');
    //     inputRef.current.value = ''; 
    //     return;
    // }

    //   const reader = new FileReader();
    //   reader.onload = (e) => {
    //       imageRef.current.src = e.target.result;
          
    //   };
    //   reader.readAsDataURL(file);
    // }
   

  return (
    
    <div>
        <Form method='POST' className='border flex w-[240px] mt-6 bg-slate-100 rounded-sm flex-col items-center justify-center '>
        <div className='form-group flex flex-col mt-2 mb-2'>
            <label className='mb-2 '>FirstName:</label>
            <input type='text' name='firstName' className='border rounded-md'/>
        </div>
        <div className='form-group flex flex-col mt-2 mb-2'>
            <label className='mb-2 '>LastName:</label>
            <input type='text' name='lastName' className='border rounded-md'/>
        </div>
        <div className='form-group flex flex-col mt-2 mb-2'>
            <label className='mb-2'>Email:</label>
            <input type='text' name='email' className='border rounded-md'/>
        </div>
        <div className='form-group gap-3 flex items-center justify-center mt-2 mb-2'>
            <label>Gender:</label>
            <select name='gender' className='border'>
              <option>male</option>
              <option>Female</option>
              </select>
        </div>
        {/* <div className='form-group'>
            <label>Image Number</label>
            <input type='number'  name='number' />
            
        </div> */}
        {/* <div className='form-group'>
            <label>Image:</label>
            <input type='file' accept='image/*' ref={inputRef} onChange={handlechange}  name='picture' />
            <img ref={imageRef} style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div> */}
        {/* <div className='form-group'>
            <label>Documents:</label>
            <input type='file' accept='application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' ref={inputRef} onChange={handlechange}  name='document' />
            <img ref={imageRef} style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div> */}
        <button type='submit' className='mb-2 mt-2 border px-4 py-2 rounded-md font-bold bg-green-300' >submit</button>
        </Form>
    </div>
  )
}

export default NewUserForm;




