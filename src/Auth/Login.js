import React from 'react'
import {  redirect ,json} from 'react-router-dom';
import Loginform from './Loginform';


const Login = () => {

  return <Loginform/>
}

export default Login;


export const AuthLogin = async ({ request }) => {
    const data = await request.formData();
    const url=request.url
    const mode=new URL(url).searchParams.get("mode") || "login"
    
    // console.log(mode);

    if(mode!=="login" && mode!== "signup"){
        throw json({message:"mode is not valid!"})
    }
    const username=data.get("username")
    const password=data.get("password")


    const authdata={
        username:username,
        password:password
    }
    // console.log("authdata",authdata);
    
        const req=await fetch("https://dummyjson.com/auth/"+mode,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(authdata)
        })
       

        if(!req.ok){

            throw json({msg:"can not authentication user"},{status:500})
        }
        
        const res=await req.json()
        // console.log(res);
        localStorage.setItem("Authorization",res.token)
        

        return redirect("/user")
    

    
};
