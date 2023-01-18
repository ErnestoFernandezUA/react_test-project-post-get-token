import { breakpoint } from '../style/breakpoints';

export function widthContentColumns() {
  const width = window.innerWidth;

  // > 1170: padding 0, gap 29x2
  // > 1024: padding 60x2, gap 29x2
  // > 768: padding 32x2, gap 16
  // > 360: padding 16x2
  // and padding card 20x2

  switch (true) {
    case (width > breakpoint.fullscreen):
      // console.log('>1170');
      return (1170 - 58) / 3 - 40;

    case (width > breakpoint.desktop):
      // console.log('>1024');
      return (width - 120 - 58) / 3 - 40;

    case (width > breakpoint.tablet):
      // console.log('>768');
      return (width - 64 - 16) / 2 - 40;

    default:
      // console.log('<768');
      return width - 32 - 40;
  }
}

export function widthImportErrors() {
  const width = window.innerWidth;

  // eslint-disable-next-line no-console
  console.log('width', width);

  // Input mobile (<768) + window paddings 16px: width-32 (<412px)
  // max-width input for all vp - 380px (>412px)
  if (width < 412) {
    return width - 32;
  }

  return 380;
}
