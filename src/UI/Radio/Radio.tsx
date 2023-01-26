import { FunctionComponent } from "react";
import { PositionType } from "../../type/Position";

import Selected from '../../images/selected.svg';
import notSelected from '../../images/notSelected.svg';
import './Radio.scss';

interface RadioProps {
  current: string;
  position: PositionType;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}
 
export const Radio: FunctionComponent<RadioProps> = ({
  current,
  position: {
    id,
    name,
  },
  onChange,
}) => {
  return (
    <label htmlFor={name} className="Radio">
      <img
        src={id === current ? Selected : notSelected}
        alt="name" 
      />
      <input
        id={name}
        name="position_id"
        type="radio"
        value={id}
        checked={id === current}
        onChange={onChange}
        className="Select__radio"
      />             
      <span>{name}</span>
    </label>
  );
}
