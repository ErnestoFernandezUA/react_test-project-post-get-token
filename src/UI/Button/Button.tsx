import React, { FunctionComponent, ReactNode, useRef } from 'react';
import classNames from 'classnames';
import './Button.scss';

type AnyFunction = (...args: any[]) => any;

interface ButtonProps {
  disabled?: boolean;
  children?: ReactNode;
  onClick?: AnyFunction;
  width?: number;
  className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
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
      className={classNames('Button',
        { 'Button--disabled': disabled },
        ...current )}
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
