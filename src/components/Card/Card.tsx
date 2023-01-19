import React, { FunctionComponent } from 'react';
import { UserType } from '../../type/User';
import './Card.scss';

interface UserProps {
  user: UserType;
  maxWidthContent?: string;
}

export const Card: FunctionComponent<UserProps> = ({
  user: {
    name, email, photo, phone, position,
  },
  maxWidthContent = '',
}) => {
  const style = {
    maxWidth: maxWidthContent,
    border: '1px solid transparent',
  };

  return (
    <div className="Card">
      <img className="Card__photo" src={photo} alt={photo} />
      <p className="Card__name" style={style}>{name}</p>
      <p className="Card__position">{position}</p>
      <p className="Card__email" style={style}>{email}</p>
      <p className="Card__phone">{phone}</p>
    </div>
  );
};
