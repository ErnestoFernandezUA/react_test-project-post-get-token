import React, { FunctionComponent } from 'react';
import './Wrapper.scss';

interface WrapperProps {
  children: any;
  // paddingTop?: number;
  // paddingRight?: number;
  // paddingLeft?: number;
  // paddingBottom?: number;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
}) => {
  return (
    <div
      className="Wrapper"
      style={{
        // paddingTop, paddingRight, paddingBottom, paddingLeft,
      }}
    >
      {children}
    </div>
  );
};
