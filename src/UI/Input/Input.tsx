import { FunctionComponent } from "react";
import './Input.scss';

interface InputProps {
  label: string;
  type: 'text' | 'password';
  value: string;
  helper: string;
  error: string[];
  onChange: (...args: any[]) => any;
}
 
export const Input: FunctionComponent<InputProps> = ({
  label, 
  type, 
  value, 
  helper, 
  error,
  onChange = () => console.log('no input onChange function'),
}) => {
  return (  
    <div>
      <label className="Input__label" htmlFor="input">
        

        <input 
          type={type} 
          value={value}
          onChange={onChange}
          className="Input__input"
          placeholder={label}
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
 