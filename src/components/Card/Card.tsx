import React, {
  FunctionComponent, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';

import { UserTypeGet } from '../../type/User';

import './Card.scss';
import '../../style/Payload.scss';

interface UserProps {
  user: UserTypeGet;
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
  const [mousePos, setMousePos] = useState<{ x: number, y: number}>({ x: 0, y: 0 });
  const [isShown, setIsShown] = useState(false);
  const { current } = useRef(classNameExternal.trim().split(' '));
  const style = {
    maxWidth: maxWidthContent,
    border: '1px solid transparent',
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={classNames('Card', ...current)}>
      <div className="Card__container">
        <img className="Card__photo" src={photo} alt={photo} />
        <p className="Card__name" style={style}>{name}</p>
        <p className="Card__position">{position}</p>
        <div className="Card__email-container">
          <p
            className="Card__email"
            style={style}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <a href={`mailto:${email}`}>{email}</a>
            {isShown && (
              <span
                className="Card__email--hovered"
                style={{
                  top: mousePos.y + 28,
                  left: mousePos.x - 10,
                }}
              >
                {email}
              </span>
            )}
          </p>
        </div>
        <p className="Card__phone">{phone}</p>
      </div>
    </div>
  );
};
