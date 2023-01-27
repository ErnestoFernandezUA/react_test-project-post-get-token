export const maskPhone = (value = '') => {
  let result = '+';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Math.min(13, value.length); i++) {
    const el = value[i];

    if ([3, 5, 8, 10].includes(i)) {
      result += ' ';
    }

    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+'].includes(el)) {
      result += el;
    } else {
      return result;
    }
  }

  // eslint-disable-next-line no-console
  console.log(result);

  return result;
};

export const unMaskPhone = (value: string) => value
  .split('')
  .filter((el, i) => (el !== ' ' && i < 17 && i !== 0))
  .join('');
