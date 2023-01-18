import { ScreenType } from "../../type/Screen";

type Paddings = {
  paddingTop: number;
  paddingLeft: number;
  paddingBottom: number;
  paddingRight: number;
}

type WrapperPaddings = {
  [screen in ScreenType]: Paddings;
}

export const wrapperPaddings: WrapperPaddings = {
  mobile: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingRight: 0,
  },
  tablet: {
    paddingTop: 0,
    paddingLeft: 0,
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
}