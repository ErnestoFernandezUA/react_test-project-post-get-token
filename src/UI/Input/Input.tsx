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
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
  // eslint-disable-next-line no-console
  onBlur = () => console.log('no input onBlur function'),
  className: classNameExternal = '',
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));

  return (
    <div
      className={classNames('Input', ...current)}
    >
      <label htmlFor="input">
        {value && (
          <p
            className="Input__label"
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
          onBlur={onBlur}
          className={classNames('Input__input',
            { 'Input__input--error': errors?.length })}
          placeholder={label}
        />
      </label>

      <div className="Input__error-container">
        {errors?.length ? (
          <>
            {errors.map((e: string) => (
              <div
                key={e}
                className="Input__error"
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
