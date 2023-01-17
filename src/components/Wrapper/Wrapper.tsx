import React, { FunctionComponent } from 'react';
import './Wrapper.scss';

interface WrapperProps {
  children: any;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return (
    <div className="Wrapper">{children}</div>
  );
};
