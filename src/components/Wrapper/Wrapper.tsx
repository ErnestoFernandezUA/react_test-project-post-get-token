import React, {
  FunctionComponent,
  // useEffect,
  // useState,
} from 'react';
// import { selectScreen } from '../../store/features/Options/optionsSlice';
// import { useAppSelector } from '../../store/hooks';
// import { Paddings, wrapperPaddings } from './Wrapper.padding';
import './Wrapper.scss';

interface WrapperProps {
  children: any;
}

export const Wrapper: FunctionComponent<WrapperProps> = ({
  children,
}) => {
  // const screen = useAppSelector(selectScreen);
  // const [stylePaddings, setStylePaddings] = useState<Paddings | null>();

  // useEffect(() => {
  //   if (screen !== null) {
  //     setStylePaddings({ ...wrapperPaddings[screen] });

  //     // eslint-disable-next-line no-console
  //     console.log('setStylePaddings');
  //   }
  // }, [screen]);

  // eslint-disable-next-line no-console
  // console.log(screen, stylePaddings);

  return (
    <div
      className="Wrapper"
      // style={{ ...stylePaddings }}
    >
      {children}
    </div>
  );
};
