import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


export const Loadtoken=()=>{
   const token= localStorage.getItem("Authorization")
   return token
}

export const Protect = (props) => {
    const {Component}=props;
    const navigate=useNavigate()
    const token=Loadtoken()
    useEffect(() => {
        if (!token) {
            navigate("/auth");
        }
    }, [token, navigate]);
   return (
    <div>
        <Component/>
    </div>
   )
}
