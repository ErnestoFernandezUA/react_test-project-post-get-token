import { breakpoint } from '../style/breakpoints';

export function widthContentColumns() {
  const width = window.innerWidth; // with scroll

  // > 1170: padding 0, gap 29x2, scroll 17
  // > 1024: padding 60x2, gap 29x2, scroll 17
  // > 768: padding 32x2, gap 16, scroll 17
  // > 360: padding 16x2, scroll 17
  // and padding card 20x2

  switch (true) {
    case (width > breakpoint.fullscreen):
      // console.log('>1170');
      return (breakpoint.fullscreen - 58) / 3 - 40;

    case (width > breakpoint.desktop):
      // console.log('>1024');
      return (width - 120 - 58) / 3 - 40;

    case (width > breakpoint.tablet):
      // console.log('>768');
      return (width - 64 - 40) / 2 - 40; // need to correct

    default:
      // console.log('<768');
      return width - 32 - 40 - 17;
  }
}

export function widthImportErrors() {
  const width = window.innerWidth;

  // eslint-disable-next-line no-console
  // console.log('width', width);

  // Input mobile (<768) + window paddings 16px: width-32 (<412px)
  // max-width input for all vp - 380px (>412px)
  if (width < 412) {
    return width - 32;
  }

  return 380;
}
