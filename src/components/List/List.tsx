import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import './List.scss';

type ListProps = {
  children: ReactNode;
  className?: string;
};

export const List: FunctionComponent<ListProps> = ({ children, className }) => {
  return (
    <div className={classNames('List', className)}>
      {children}
    </div>
  );
};
