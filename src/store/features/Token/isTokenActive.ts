export const isTokenActive = (
  timeOfLastSet: number | null,
  activeDuration: number, // min
) => Boolean(timeOfLastSet)
  && Date.now() - Number(timeOfLastSet) < activeDuration * 60 * 1000;
