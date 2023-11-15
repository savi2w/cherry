export const getRandomInt = (limit: number) =>
  Math.floor(Math.random() * limit);

export const getPositiveRandomInt = (limit: number) => {
  const randomInt = getRandomInt(limit + 1);
  if (randomInt === 0) {
    return 1;
  }

  return randomInt;
};
