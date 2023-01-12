import { FunctionComponent, useEffect, useState } from "react";
import { getPositionsAsync, postUserAsync } from "../store/features/Users/usersSlice";
import { useAppDispatch } from "../store/hooks";

interface FormComponentProps {
  
}
 
export const FormComponent: FunctionComponent<FormComponentProps> = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [position_id, setPositionId] = useState('');
  const [positions, setPositions] = useState<any>([])

  useEffect(() => {
    const fetchPositions = async () => {
      const response = fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(function(response) { 
        return response.json(); 
      }) 
      .then(function(data) { 
        // console.log(data.positions); 
        // process success response 
        setPositions(data.positions);
      })

      // var formData = new FormData(); 
      // // file from input type='file' 
      // var fileField = document.querySelector('input[type="file"]'); formData.append('position_id', 2); 
      // formData.append('name', 'Jhon'); 
      // formData.append('email', 'Jhon@gmail.com'); 
      // formData.append('phone', '+380955388485'); 
      // formData.append('photo', fileField.files[0]);
      // fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
      // { method: 'POST', 
      // body: formData, 
      // headers: { 
      //   'Token': token, 
      //   // get token with GET api/v1/token method 
      // }, 
      // }) 
      // .then(function(response) { return response.json(); }) .then(function(data) { console.log(data); if(data.success) { // process success response } else { // proccess server errors } }) .catch(function(error) { // proccess network errors });

  
      return response;
    }
    
    fetchPositions()
  }, [dispatch]);

  // console.log(positions);

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
        name: 'lebovsky',
        email: 'senior@frontend.dev',
        phone: '+3808888888',
        photo: undefined,
        id: 1,
      }
    }));
  };

  return (
    <>
      {/* <input type="text" /> */}
      <button
        onClick={() => postHandler()}
      >
        Post User
      </button>
    </>
  );
}
 