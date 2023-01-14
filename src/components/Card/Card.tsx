import { FunctionComponent } from "react";
import { UserType } from "../../type/User";
// import styled from 'styled-components';
import './Card.scss';

// const Wrapper = styled.div`
//   border: 1px solid red;
//   cursor: pointer;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CardImage = styled.img`
//   display: block;
//   height: 150px;
//   object-fit: cover;
//   object-position: center;
// `;

interface UserProps {
  user: UserType;
}
 
export const Card: FunctionComponent<UserProps> = ({ user: {
  id, name, email, photo, phone, position,
}}) => {
  return (
    <div className="Card"> 
      <img src={photo} alt={photo} />
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
