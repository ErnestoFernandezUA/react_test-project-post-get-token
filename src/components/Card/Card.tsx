import { FunctionComponent } from "react";
import { UserType } from "../../type/User";
import './Card.scss';

interface UserProps {
  user: UserType;
}
 
export const Card: FunctionComponent<UserProps> = ({ user: {
  id, name, email, photo, phone, position,
}}) => {
  return (
    <div className="Card"> 
      <img className="Card__photo" src={photo} alt={photo} />
      <p className="Card__name">{name}</p>
      <p className="Card__position">{position}</p>
      <p className="Card__email">{email}</p>
      <p className="Card__phone">{phone}</p>
    </div>
  );
}
