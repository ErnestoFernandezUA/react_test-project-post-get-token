import axios from "axios";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { selectPositions } from "../../store/features/Positions/positionsSlice";
import { getUsersAsync, postUserAsync, selectPostFails } from "../../store/features/Users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import './From.scss';
const UPLOAD_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/post';

interface FormProps {
}
 
export const Form: FunctionComponent<FormProps> = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);

  console.log('Form/ fails = ', fails);

  const [name, setName] = useState('Tom');
  const [email, setEmail] = useState('tom@valid.et');
  const [phone, setPhone] = useState('+380955388485');
  const [position_id, setPositionId] = useState('1');
  const [images, setImages] = useState<any[]>();
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<any | null>();

  useEffect(() => {
  }, [dispatch]);

  // console.log(positions);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleUpload1 = async () => {
    setIsUploading(true);
    try {
      // const formData = new FormData();
      // formData.append('Image', images[0]);

      // const res = await fetch(UPLOAD_URL, {
      //   method: "POST",
      //   body: formData
      // });

      // const data = await res.json();
      // console.log(data);

      // const { data: { message } } = await axios.post(UPLOAD_URL, formData);
      // alert(message);
      
      // setImages(undefined);
      // inputRef.current.value = "";

    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }

  };

  const handleUpload = async () => {
    setIsUploading(true);

    try {
      console.log('handleUpload', 
        { user: { name, email, phone, images, position_id }},
      );

      dispatch(postUserAsync({
        user: {
          name,
          email,
          phone,
          images,
          position_id,
        }
      }));
      await dispatch(getUsersAsync({ page: 1, count: 6 }));
    } catch (error) {
      
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="Form">
      {/* <input type="text" /> */}
      <label htmlFor="name">
        name:&nbsp;
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}  
        />
        {fails.name && fails.name.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>
      
      <label htmlFor="email">
        email:&nbsp;
        <input
          id="email"
          type="text" 
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        {fails.email && fails.email.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>

      <label htmlFor="phone">
        phone:&nbsp;
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}  
        />
        {fails.phone && fails.phone.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>

      <label htmlFor="positions">
        positions:&nbsp;
        <select
          id="positions"
          value={position_id}
          onChange={(e) => setPositionId(e.target.value)}
        >
          {positions.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        {fails.position_id && fails.position_id.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>


      <label htmlFor="file">
        <div style={{
          visibility: "hidden",
        }}>
          <input
            type="file"
            onChange={(e: any) => setImages(e.target.files)}
            accept="image/*"
            ref={inputRef}
            multiple
            disabled={isUploading}
          />
        </div>
        {fails.images && fails.images.map(e => (
          <p key={e}>{e}</p>
        ))}
      </label>
      
      {images?.length ? (
        <>
          <div className="img-preview">
            {Array.from(images).map((image, index) => (
              <img alt="" src={URL.createObjectURL(image)} key={index}/>
            ))}
          </div>
          <div className="action-buttons">
            <button onClick={handleClick} disabled={isUploading}>Change</button>
            {/* <button onClick={handleUpload} disabled={isUploading}>Upload</button> */}
          </div>
        </>
      ) : (
        <button onClick={handleClick}>Chose Images</button>
      )}

      <button
        onClick={() => handleUpload()}
        disabled={isUploading}
      >
        Post User
      </button>
    </div>
  );
}
 