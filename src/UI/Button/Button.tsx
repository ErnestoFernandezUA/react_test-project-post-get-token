import classNames from "classnames";
import { FunctionComponent, memo, useEffect, useRef } from "react";
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
  // let { current } = useRef<string[] | null>();

  // useEffect(() => {
  //   if (className) {current = className.trim().split(' ')};
  // }, [])

  // console.log(current);

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