import { FunctionComponent } from "react";
import { UserType } from "../../type/User";
import './Card.scss';

interface UserProps {
  user: UserType;
  maxWidthContent: string; 
}
 
export const Card: FunctionComponent<UserProps> = ({ user: {
  id, name, email, photo, phone, position,
  },
  maxWidthContent,
}) => {
  const card = document.getElementById(`card-${id}`);
  console.log('card', card, card?.offsetWidth ? card?.offsetWidth : 0);

  const style = {
    // maxWidth: `${widthContentColumns()}px`,
    maxWidth: maxWidthContent,
    border: '1px solid transparent',
  }

  return (
    <div className="Card" id={`card-${id}`}> 
      <img className="Card__photo" src={photo} alt={photo} />
      <p className="Card__name" style={style}>{name}</p>
      <p className="Card__position">{position}</p>
      <p className="Card__email" style={style}>{email}</p>
      <p className="Card__phone">{phone}</p>
    </div>
  );
}
