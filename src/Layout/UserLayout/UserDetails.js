import React from 'react'
import { useRouteLoaderData, redirect } from 'react-router-dom'
import ShowDetails from './ShowDetails';


const UserDetails = () => {
    const user=useRouteLoaderData("root1")

return <ShowDetails data={user} />
    
  
}

export default UserDetails;


export const UserDetailLoder=async({params})=>{
    const {id}=params
    // console.log(id);
    const appId="65b7e0773709b4162e6d2104"
    const apiUrl = "http://localhost:5000/User/"+id;

    
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

    export const action = async ({ params, request }) => {
        const { id } = params;
        console.log(id);
        const url = 'http://localhost:5000/User/' + id; 
        try {
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                console.log(`User with ID ${id} deleted successfully.`);
            } else {
                console.error('Failed to delete user.');
                
            }
        } catch (error) {
            console.error('Error occurred while deleting user:', error);
           
        }
        return redirect("/user")
    };
    