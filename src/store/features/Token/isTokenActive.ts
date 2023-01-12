export const isTokenActive = (timeOfLastSet: number | null, activeDuration: number) => {
  const currentTime = Date.now();

  if (timeOfLastSet) {
    // console.log('selectTokenIsExpired/ last change:', timeOfLastSet);
    console.log('selectTokenIsExpired/ time from last:',
    currentTime - timeOfLastSet < activeDuration * 1000, Math.floor((currentTime - timeOfLastSet) / 1000 / 60), 'min');

    return currentTime - timeOfLastSet < activeDuration * 60 * 1000 ;
  }

  return false;
};
