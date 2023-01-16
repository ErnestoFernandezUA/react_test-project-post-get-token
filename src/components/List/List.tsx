import React, { FunctionComponent } from "react";
import './List.scss';

export const List: FunctionComponent<{ children: any }> = ({ children }) => {
  const List = document.getElementById(`List`);
  console.log('List', List, List?.offsetWidth ? (List?.offsetWidth - 16) / 2: 0);

  return (
    <div className="List" id={'List'}>
      {children}
    </div>
  );
}
