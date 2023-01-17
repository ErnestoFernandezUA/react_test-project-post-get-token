import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import './Button.scss';

type AnyFunction = (...args: unknown[]) => unknown;

interface ButtonProps {
  className?: string; // External className for position
  disabled?: boolean;
  children?: any;
  onClick?: AnyFunction;
  width?: number;
}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  disabled = false,
  children = '',
  // eslint-disable-next-line no-console
  onClick = () => console.log('no onClick function'),
  width,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classNames('Button',
        { 'Button--disabled': disabled },
        className)}
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
