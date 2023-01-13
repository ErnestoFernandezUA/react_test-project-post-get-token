import { FunctionComponent, useEffect, useRef, useState } from "react";
import { getPositionsAsync, postUserAsync } from "../../store/features/Users/usersSlice";
import { useAppDispatch } from "../../store/hooks";

import './From.scss';

interface FormProps {
  
}
 
export const Form: FunctionComponent<FormProps> = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [position_id, setPositionId] = useState('');
  const [positions, setPositions] = useState<any>([])
  const [image, setImage] = useState<unknown>();
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<any | null>();

  useEffect(() => {
    dispatch(getPositionsAsync());
    // const fetchPositions = async () => {
    //   const response = await dispatch(getPositionsAsync())
    //   .then(function(response) { 
    //     return response.json(); 
    //   }) 
    //   .then(function(data) { 
    //     // console.log(data.positions); 
    //     // process success response 
    //     setPositions(data.positions);
    //   })

    //   return response;
    // }
    
    // fetchPositions()
  }, [dispatch]);

  // console.log(positions);

  const onChange = (e: any) => {}

  const handleChange = (event: any) => {
    setImage(event.target.files);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleUpload = async () => {
    // setIsUploading(true);
    // try {
    //   const formData = new FormData();
    //   formData.append('Image', images[0]);

    //   // const res = await fetch(UPLOAD_URL, {
    //   //   method: "POST",
    //   //   body: formData
    //   // });

    //   // const data = await res.json();
    //   // console.log(data);

    //   const { data: { message } } = await axios.post(UPLOAD_URL, formData);
    //   alert(message);
      
    //   setImages(undefined);
    //   inputRef.current.value = "";

    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsUploading(false);
    // }

  };

  const postHandler = () => {
    // var formData = new FormData();
    // // file from input type='file' 
    // var fileField = document.querySelector('input[type="file"]');

    // // formData.append('position_id', 2); 
    // formData.append('name', 'Jhon'); 
    // formData.append('email', 'Jhon@gmail.com'); 
    // formData.append('phone', '+380955388485'); 
    // formData.append('photo', fileField.files[0]);
    dispatch(postUserAsync({
      user: {
        name: 'pep',
        email: 'd@d.dev',
        phone: '+3808888888',
        photo: undefined,
        id: 1,
      }
    }));
  };

  return (
    <div className="Form">
      {/* <input type="text" /> */}
      <label htmlFor="name">
        <input
          id="name"
          type="text" 
          onChange={(e: any) => onChange(e.target.value)}  
        />
      </label>

      <label htmlFor="file">
        <input
          type="file"
          onChange={handleChange}
          accept="image/*"
          ref={inputRef}
          multiple
          disabled={isUploading}
        />
      </label>
      {image ? (
        <>
          <div className="img-preview">
            {/* {Array.from(image).map((image, index) => (
              <img alt="" src={URL.createObjectURL(image)} key={index}/>
            ))} */}
          </div>
          <div className="action-buttons">
            <button onClick={handleClick} disabled={isUploading}>Change</button>
            <button onClick={handleUpload} disabled={isUploading}>Upload</button>
          </div>
        </>
      ) : (
        <button onClick={handleClick}>Chose Image</button>
      )}

      <button
        onClick={() => postHandler()}
      >
        Post User
      </button>
    </div>
  );
}
 