import React, { FunctionComponent, ReactNode } from 'react';
import './Container.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  );
};
