import React, { FunctionComponent, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  tableIndex?: number;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  width?: number;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  tableIndex,
  disabled = false,
  children = '',
  // eslint-disable-next-line no-console
  onClick = () => console.log('no onClick function'),
  width,
  className: classNameExternal = '',
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));

  return (
    <div
      role="button"
      tabIndex={tableIndex}
      className={classNames('Button',
        { 'Button--disabled': disabled },
        ...current)}
      onClick={onClick}
      style={{ width }}
      onKeyDown={() => {}}
    >
      <div className="Button__container">
        {children}
      </div>
    </div>
  );
};
