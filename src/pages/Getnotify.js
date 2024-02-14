import React from 'react'
import Notified from './Notified';
import { BellRing } from 'lucide-react';

const Getnotify = () => {
   

  return (
    <div className='w-full h-[100vh] flex flex-col mt-[80px] items-center'>
    <h1 className='flex mx-3 text-7xl font-bold justify-center items-center mb-28 ' >Get <BellRing className='text-yellow-500 size-10 mx-2 '/> Notification when add user!</h1>
    <Notified className=" px-2 border "/>
    </div>
  )
}

export default Getnotify;

export const actionnotification=async({request})=>{
    const data=await request.formData()
    const email=data.get("email")
    console.log('NOTIFICATION' , email);
    return {message:"Congrates!you will be notified!"}
}