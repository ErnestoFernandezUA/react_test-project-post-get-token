import classNames from "classnames";
import { FunctionComponent } from "react";
import './Button.scss';

type AnyFunction = (...args: any[]) => any;

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
  onClick = () => console.log('no onClick function'),
  width,
}) => {
  return (
    <div
      className={classNames('Button',
        { 'Button--disabled': disabled },
        className,
      )}
      onClick={onClick}
      style={{ width }}
    >
    
      <div className="Button__container">
        {children}
      </div>
    </div>
  );
}
