export const isTokenActive = (timeOfLastSet: number | null, activeDuration: number) => {
  const currentTime = Date.now();

  if (timeOfLastSet) {
    // console.log('selectTokenIsExpired/ last change:', timeOfLastSet);
    console.log('selectTokenIsExpired/ time from last:',
     Math.floor((currentTime - timeOfLastSet) / 1000 / 60), 'min,',
     'is token active? ', currentTime - timeOfLastSet < activeDuration * 60 *1000,
     );

    return currentTime - timeOfLastSet < activeDuration * 60 * 1000 ;
  }

  return false;
};
