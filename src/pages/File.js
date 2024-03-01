import React, { useRef, useEffect, useState } from 'react';

export const File = () => {
  const [items, setItems] = useState([]);
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      imageRef.current.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch("http://localhost:8000/Users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!req.ok) {
          throw new Error("Could not fetch data on file");
        }
        const res = await req.json();
        console.log("api", res);
        setItems(res); // Assuming res is an array
        // Handle the response data as needed
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-[120px] w-[120px]'>
        {items.map((profile, index) => (
          <img key={index} src={profile.Profile.picture} alt={`Profile ${index}`} className=' rounded-full  w-full h-full' />
        ))}
        <div>
          
        </div>
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
      <br />
      <img ref={imageRef} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
      <button>submit</button>
    </div>
  );
};
