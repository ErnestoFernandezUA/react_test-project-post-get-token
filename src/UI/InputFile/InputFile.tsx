import React, { FunctionComponent, useRef } from 'react';
import classNames from 'classnames';

import './InputFile.scss';

interface InputFileProps {
  fileName: string | undefined;
  isDisabled: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fails?: string[] | undefined,
  className?: string;
}

export const InputFile: FunctionComponent<InputFileProps> = ({
  fileName,
  isDisabled,
  onChange,
  fails = [],
  className: classNameExternal = '',
}) => {
  const { current } = useRef(classNameExternal.trim().split(' '));
  // const fails = ['Error1', 'Error2'];

  // eslint-disable-next-line no-console
  // console.log(failsExternal);

  return (
    <>
      <label
        htmlFor="file"
        className={classNames('InputFile',
          { 'InputFile--error': fails?.length },
          ...current)}
      >
        <div className="InputFile__button">
          Upload
        </div>
        <input
          id="file"
          name="photo"
          type="file"
          onChange={onChange}
          accept="image/jpg"
          multiple={false}
          disabled={isDisabled}
          className="InputFile__input"
          hidden
        />

        <span className={classNames('InputFile__value',
          { 'InputFile__value--empty': !fileName })}
        >
          {fileName || 'Upload your photo'}
        </span>

        <div className="InputFile__error-container">
          {Boolean(fails.length) && fails.map((e: string) => (
            <p key={e} className="InputFile__error">{e}</p>
          ))}
        </div>
      </label>
    </>
  );
};
