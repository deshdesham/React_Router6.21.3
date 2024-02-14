import React from 'react'
import { useRouteLoaderData} from 'react-router-dom';
import EditForm from './EditForm';

const UserEdit = () => {
  const data=useRouteLoaderData("root1")
  
  return  <EditForm Udata={data} />
}

export default UserEdit;

export const UserPatchAction = async ({ request, params }) => {
  const { id } = params;
  console.log(id);
  const data = await request.formData();

  const submission = {};
  if (data.has("email")) {
    submission.email = data.get("email");
  }
  if (data.has("lastName")) {
    submission.lastName = data.get("lastName");
  }
  if (data.has("firstName")) {
    submission.firstName = data.get("firstName");
  }

  console.log("submission", submission);
  const url = 'http://localhost:5000/User/' + id;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission)
    });
    if (!res.ok) {
      throw new Error("Failed to save data");
    }
    
    // Redirect after successful submission
    window.location.href = "/user"; // Client-side redirect
    // If you're using a server framework like Express.js, send a response with a redirect status code
    // Example: response.redirect('/user');

  } catch (err) {
    console.log("err", err);
  }
};
