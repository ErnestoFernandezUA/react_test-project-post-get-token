import React, { FunctionComponent, ReactNode, useRef } from 'react';
import classNames from 'classnames';

import './List.scss';

type ListProps = {
  children?: ReactNode;
  className?: string;
};

export const List: FunctionComponent<ListProps> = ({
  children, 
  className: classNameExternal = ''
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));

  return (
    <div className={classNames('List', ...current)}>
      {children}
    </div>
  );
};
