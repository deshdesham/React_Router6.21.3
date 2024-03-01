import React from 'react'
import { useRouteError } from 'react-router-dom';


const FileError = () => {
    const error = useRouteError();
    console.log("errors",error);

   
      return (
        <div>
          <h1>{error.status}</h1>
          <h2>{error.data.message}</h2>
          <p>
            Go ahead and email {error.data.message} if you
            feel like this is a mistake.
          </p>
        </div>
      );
    }

export default FileError;