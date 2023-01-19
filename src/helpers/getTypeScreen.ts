import { breakpoint } from '../style/breakpoints';

export const getTypeScreen = () => {
  const width = window.innerWidth;

  switch (true) {
    case (width > breakpoint.fullscreen):
      return 'fullscreen';

    case (width > breakpoint.desktop):
      return 'desktop';

    case (width > breakpoint.tablet):
      return 'tablet';

    default:
      return 'mobile';
  }
};
