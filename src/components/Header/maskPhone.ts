export const maskPhone = (value = '') => {
  let result = '+38 ';

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < Math.min(12, value.length); i++) {
    const el = value[i];

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el)) {
      if (i === 2) {
        result += '(';
      }

      if (i === 5) {
        result += ')';
      }

      if ([5, 8, 10].includes(i)) {
        result += ' ';
      }

      result += el;
    } else {
      return result;
    }
  }

  return result;
};

export const unMaskPhone = (value: string) => value
  .split('')
  .filter((el, i) => (
    i < 19
    && el !== ' ' && el !== '(' && el !== ')' && el !== '+'
  ))
  .join('');
