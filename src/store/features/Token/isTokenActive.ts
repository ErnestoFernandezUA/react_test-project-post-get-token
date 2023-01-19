export const isTokenActive = (
  timeOfLastSet: number | null,
  activeDuration: number, // min
) => {
  const currentTime = Date.now();

  if (timeOfLastSet) {
    const isActive = currentTime - timeOfLastSet < activeDuration * 60 * 1000;

    // eslint-disable-next-line no-console
    console.log(
      'selectTokenIsExpired/ time from last:',
      Math.floor((currentTime - timeOfLastSet) / 1000 / 60), 'min,',
      'is token active? ', isActive,
    );

    return isActive;
  }

  return false;
};
