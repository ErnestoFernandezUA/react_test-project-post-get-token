import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Loader.scss';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: FunctionComponent<LoaderProps> = ({ isLoading }) => {
  return (
    <div className="Loader">
      <div className={classNames('Loader__container',
        { 'Loader--isLoading': isLoading })}
      >
        <div className="Loader__logo">
          Loading...
        </div>
      </div>
    </div>
  );
};
