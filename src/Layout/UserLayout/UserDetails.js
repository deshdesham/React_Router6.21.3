import React from 'react'
import { useNavigate,useLoaderData } from 'react-router-dom'


const UserDetails = () => {
    const Users=useLoaderData()
    console.log("user",Users);
    // const params=useParams()
    const navigate=useNavigate()
    // const userId=params.name

  return (
    <div className="w-[300px] rounded-md border">
      <div className='w-full flex justify-center items-center'>

    <img src={Users.picture} alt={Users.picture} className='w-[250px] h-[250px] rounded-full'/>
      </div>
    <div className="p-4">
      <h1 className="text-lg font-semibold">About Macbook</h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
      </p>
      <button
        type="button"
        className="mt-4 rounded-sm bg-[#cc1818] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-2"
        onClick={()=>navigate("/user")}
        
      >
        Back
      </button>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Read More
      </button>
    </div>
  </div>
  )
}

export default UserDetails;


export const UserDetailLoder=async({params})=>{
    const {id}=params
    console.log(id);
    const appId="65b7e0773709b4162e6d2104"
    const apiUrl = "https://dummyapi.io/data/v1/user/"+id;

    
    try {
        const res = await fetch(apiUrl, {
            headers: {
                "app-id": appId,  // Fix the typo here
            },
        });

        if (!res.ok) {
            throw new Error("Couldn't fetch data");
        }

        return res.json();

    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error so that the calling code can handle it
    }
    }