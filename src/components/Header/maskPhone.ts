export const maskPhone = (value: string) => {
  let result = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < value.length; i++) {
    if ([3, 5, 8, 10, 12].includes(i)) {
      result += ' ';
    }

    result += value[i];
  }

  if (result.length >= 17
    || ![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(result[result.length - 1]))) {
    // eslint-disable-next-line no-console
    console.log('true');

    return result.slice(0, -2);
  }

  return result;
};

export const unMaskPhone = (value: string) => {
  return value.split('').filter(el => el !== ' ').join('');
};
