export const getRandomNum = (min: number, max: number) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

// TODO to fix "any" if possible
export const shuffleArr = (arr: Array<any>) => {
  return arr.sort(() => Math.random() - 0.5);
};
