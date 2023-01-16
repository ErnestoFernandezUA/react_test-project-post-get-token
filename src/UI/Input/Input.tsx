import classNames from "classnames";
import { FunctionComponent } from "react";
import './Input.scss';

interface InputProps {
  label: string;
  type: 'text' | 'password';
  value: string;
  helper?: string;
  error: string[];
  onChange?: (...args: any[]) => any;
  backgroundColor?: string;
  errorColor?: string;
  className?: string;
}
 
export const Input: FunctionComponent<InputProps> = ({
  label, 
  type = 'text', 
  value, 
  helper, 
  error,
  onChange = () => console.log('no input onChange function'),
  backgroundColor = 'white',
  errorColor = 'red',
  className,
}) => {
  console.log(value);

  const styleInput = {
    backgroundColor: backgroundColor,
  };
  const styleLabel = {
    backgroundColor: backgroundColor,
  };
  const styleInput__input = {
    backgroundColor: backgroundColor,
  };

  return (  
    <div 
      className={classNames('Input', className)} 
      style={styleInput}
    >
      <label htmlFor="input">
        {value && (
          <p
            className="Input__label" 
            style={styleLabel}
          >
            {label}
          </p>
        )}

        <input 
          id="input"
          type={type} 
          value={value}
          onChange={onChange}
          className={classNames('Input__input',
          {'Input__input--error': error.length > 0}
          )}
          placeholder={label}
          style={styleInput__input}
        />
      </label>
      {error.length ? (
        <p className="Input__error">{error[0]}</p>
      ) : (
        <p className="Input__helpers">{helper}</p>
      )}
    </div>
  );
}
 