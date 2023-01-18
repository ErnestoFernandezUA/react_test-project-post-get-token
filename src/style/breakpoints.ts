import { ScreenType } from '../type/Screen';

type BreakpointType = {
  [screen in ScreenType]: number;
};

export const breakpoint: BreakpointType = {
  mobile: 370, // with scroll
  tablet: 768,
  desktop: 1024,
  fullscreen: 1170,
};
