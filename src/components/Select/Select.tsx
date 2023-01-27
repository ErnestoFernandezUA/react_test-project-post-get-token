import React, { FunctionComponent, useRef } from 'react';
import classNames from 'classnames';

import { selectPositions } from '../../store/features/Positions/positionsSlice';
import { selectPostFails } from '../../store/features/Users/usersSliceGET';
import { useAppSelector } from '../../store/hooks';
import { PositionType } from '../../type/Position';
import { Radio } from '../../UI/Radio';

import './Select.scss';

interface SelectProps {
  currentValue: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export const Select: FunctionComponent<SelectProps> = ({
  currentValue,
  onChange,
  className: classNamesExternal = '',
}) => {
  const positions = useAppSelector(selectPositions);
  const fails = useAppSelector(selectPostFails);
  const { current } = useRef(classNamesExternal.trim().split(' '));

  return (
    <div className={classNames('Select', ...current)}>
      <p className="Select__title">Select your position:</p>

      {positions.map((position: PositionType) => (
        <div key={position.id} className="Select__radio">
          <Radio
            position={position}
            current={currentValue}
            onChange={onChange}
          />
        </div>
      ))}

      <div className="Select__errors-container">
        {fails.position_id && fails.position_id.map(e => (
          <p key={e} className="Select__error">{e}</p>
        ))}
      </div>
    </div>
  );
};
