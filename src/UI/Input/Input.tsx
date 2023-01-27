import React, { FunctionComponent, useRef } from 'react';
import classNames from 'classnames';
import './Input.scss';

interface InputProps {
  name: string;
  label: string;
  type: 'text' | 'password';
  value: string;
  helper?: string;
  errors?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
  className?: string;
  maxWidthErrors: number;
}

export const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  type = 'text',
  value,
  helper,
  errors = [],
  // eslint-disable-next-line no-console
  onChange = () => console.log('no input onChange function'),
  backgroundColor = 'white',
  className: classNameExternal = '',
  // maxWidthErrors,
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));

  // const styleInput = {
  //   backgroundColor,
  // };
  const styleLabel = {
    backgroundColor,
  };
  // const styleInput__input = {
  //   backgroundColor,
  // };
  // const styleError = {
  //   maxWidth: maxWidthErrors,
  //   border: '1px solid green',
  // };

  // eslint-disable-next-line no-console
  // console.log('maxWidthErrors', maxWidthErrors);

  return (
    <div
      className={classNames('Input', ...current)}
      // style={styleInput}
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
          name={name}
          id="input"
          type={type}
          value={value}
          onChange={onChange}
          className={classNames('Input__input',
            { 'Input__input--error': errors?.length })}
          placeholder={label}
          // style={styleInput__input}
        />
      </label>

      <div className="Input__error-container">
        {errors?.length ? (
          <>
            {errors.map((e: string) => (
              <div
                key={e}
                className="Input__error"
                // style={styleError}
              >
                {e}
              </div>
            ))}
          </>
        ) : (
          <p className="Input__helpers">{helper}</p>
        )}
      </div>

    </div>
  );
};
