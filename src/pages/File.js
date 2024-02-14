import React,{useRef} from 'react'

export const File = () => {
    const fileInputRef = useRef(null);
    const imageRef = useRef(null);
  
    const handleFileChange = (event) => {
        console.log(event);
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        imageRef.current.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    };

  return (
    <>
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
      <br />
      <img ref={imageRef} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
      <button>submit</button>
    </div>
    </>
  )
}





// export default File;