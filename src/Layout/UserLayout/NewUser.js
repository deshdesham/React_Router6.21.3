import React from 'react'
import NewUserForm from './NewUserForm';
import { redirect} from 'react-router-dom';


const NewUser = () => {
  
  return <NewUserForm />
}

export default NewUser;

export const NewUserAction= async({request})=>{
  const data=await request.formData()
  const getgender=data.get("gender")
  
  let x=Math.floor(Math.random() * 90 + 10);
  
    let menimage = `https://randomuser.me/api/portraits/med/men/${x}.jpg`;
    let womenimage = `https://randomuser.me/api/portraits/med/women/${x}.jpg`;

  
  
  console.log("gender",getgender);
    // console.log("setimage",fakeimage);

  const createData={
    firstName:data.get("firstName"),
    lastName:data.get("lastName"),
    email:data.get("email"),
    gender:getgender,
    picture:getgender === 'male' ? menimage : womenimage,
    document:data.get("document")
  }
  console.log("creaeData",createData);

  
try{

  const response=await fetch("http://localhost:5000/User",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(createData)

  })
  if(!response.ok){
    throw Error("could not submit data by response")
  }
  
}catch(error){
  console.log('Error',error);
  throw new Error("could not submit the data")
}
return redirect("/user")
}