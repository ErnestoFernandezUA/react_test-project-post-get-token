// unused
import { ScreenType } from '../../type/Screen';

export type Paddings = {
  paddingTop: number;
  paddingLeft: number;
  paddingBottom: number;
  paddingRight: number;
};

export type WrapperPaddings = {
  [screen in ScreenType]: Paddings;
};

export const wrapperPaddings: WrapperPaddings = {
  mobile: {
    paddingTop: 0,
    paddingLeft: 15,
    paddingBottom: 0,
    paddingRight: 15,
  },
  tablet: {
    paddingTop: 0,
    paddingLeft: 160,
    paddingBottom: 0,
    paddingRight: 0,
  },
  desktop: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  fullscreen: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
};
