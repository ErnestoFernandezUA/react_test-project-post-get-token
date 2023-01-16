import React, { FunctionComponent } from "react";
import './List.scss';

export const List: FunctionComponent<{ children: any }> = ({ children }) => {
  return (
    <div className="List" id={'List'}>
      {children}
    </div>
  );
}
