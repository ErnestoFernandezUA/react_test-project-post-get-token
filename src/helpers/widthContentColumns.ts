export function widthContentColumns() {
  const width = window.innerWidth;

  // > 1170: padding 0, gap - 29x2
  // > 1024: padding 60x2, gap - 29x2
  // > 768: padding 32x2 , gap - 16
  // > 1170: padding 16x2, gap  - 29
  // and padding card 20x2 
  switch (true) {
    case (width > 1170):
      console.log('>1170');
      return (1170 - 58) / 3 - 40;

    case (width > 1024):
      console.log('>1024');
      return (width - 120 - 58) / 3 - 40;

    case (width > 768):
      console.log('>768');
      return (width - 64 - 16) / 2 - 40;

    default:
      console.log('<768');
      return width - 32 - 40;
  }
}
