import classNames from "classnames";
import { FunctionComponent } from "react";
import './Button.scss';

type AnyFunction = (...args: any[]) => any;

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: any;
  onClick?: AnyFunction;
}
 
const Button: FunctionComponent<ButtonProps> = ({
  className, 
  disabled = false, 
  children = '', 
  onClick = () => console.log('no onClick function'), 
}) => {
  return (
    <div
      className={classNames('Button',
        { 'Button--disabled': disabled },
        className,
      )}
    >
    
      <div className="Button__container">
        {children}
      </div>
    </div>
  );
}
 
export default Button;