import React, { FunctionComponent, useRef } from 'react';
import classNames from 'classnames';

import { UserType } from '../../type/User';

import './Card.scss';
import '../../style/Payload.scss';

interface UserProps {
  user: UserType;
  maxWidthContent?: string;
  className?: string;
}

export const Card: FunctionComponent<UserProps> = ({
  user: {
    name, email, photo, phone, position,
  },
  maxWidthContent = '',
  className: classNameExternal = '',
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));
  const style = {
    maxWidth: maxWidthContent,
    border: '1px solid transparent',
  };

  return (
    <div className={classNames('Card', ...current)}>
      <div className="Card__container">
        <img className="Card__photo" src={photo} alt={photo} />
        <p className="Card__name" style={style}>{name}</p>
        <p className="Card__position">{position}</p>
        <p className="Card__email" style={style}>
          {email}
          <span className="Card__email--hover">{email}</span>
        </p>
        <p className="Card__phone">{phone}</p>
      </div>
    </div>
  );
};
