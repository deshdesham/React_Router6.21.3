import React, { useRef } from 'react'

const ex = ({data,onSave}) => {

    const firstnameRef=useRef()
    const lastnameRef=useRef()
    const emailRef=useRef()

    const HandleInput=(event)=>{
        event.preventDefault();
        // const firstnameValue=firstnameRef.current.value;
        // const lastnameValue=lastnameRef.current.value;
        // const emailValue=emailRef.current.value;
        // console.log(`firstname:${firstnameValue},lastname:${lastnameValue},email:${emailValue}`);
    }

    const HandleSave=()=>{
        const userdata={
            firstName:firstnameRef.current.value,
            lastName:lastnameRef.current.value,
            email:emailRef.current.value,
        }
        onSave(userdata);
        
    }
  return (
    <div className='mt-4'>
      <form >
        <div className='form-group'>
          <label>FirstName:</label>
          <input type='text' name='firstName' placeholder='FirstName' defaultValue={data.firstName} ref={firstnameRef}
          onChange={HandleInput}></input>
        </div>
        <div className='form-group'>
          <label>LastName:</label>
          <input type='text' name='lastName' placeholder='LastName' defaultValue={data.lastName} ref={lastnameRef}
          onChange={HandleInput}></input>
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type='text' name='email' placeholder='Email' defaultValue={data.email} ref={emailRef}
          onChange={HandleInput}></input>
        </div>
      </form>
        <button type='submit' onClick={HandleSave}>submit</button>
    </div>
  )
}

export default ex;