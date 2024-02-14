import React from 'react'
import { NavLink, useSubmit} from 'react-router-dom';

const ShowDetails = ({data}) => {
 
  const submit=useSubmit()
   
    const DeleteHandler=(e)=>{
      e.preventDefault()
      const candelete=window.confirm("do you want to delete?");
      if(candelete){
        submit(null,{method:"POST"});
      }

    }
  return (
    <>
            <div className=' rounded-md mt-3 w-[250px] items-center flex flex-col bg-gray-200'>
                <img src={data.picture} alt={data.picture} className='my-3 '/>
                <p>{data.firstName}</p>
                <p>{data.email}</p>
                <p>{data.gender}</p>

                <div className='flex m-2 2 0 0'>
                <NavLink to="edit" className="mx-2 px-4 py-1 bg-red-300 rounded-md  " >Edit</NavLink>
                <NavLink className="mx-2 px-4 py-1 bg-red-300 rounded-md " onClick={DeleteHandler} >Delete</NavLink>

                </div>
            </div>   
    </>
  )
}

export default ShowDetails;