export const getRandomNum = (min: number, max: number) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

// TODO to fix "any" if possible
// eslint-disable-next-line
export const shuffleArr = <T>(arr: Array<T>): Array<T> => {
  return arr.sort(() => Math.random() - 0.5);
};

export const getNodeHeight = (selector: string): number => {
  const node = document.querySelector(selector);
  return node?.clientHeight || 0;
};

export const setCssVar = (name: string, value: string): void => {
  document.documentElement.style.setProperty(name, value);
};

export const preventPageScroll = (flag: boolean): void => {
  const bodyClassList = document.body.classList;

  if (flag) {
    bodyClassList.add('overflow-hidden');
  } else {
    bodyClassList.remove('overflow-hidden');
  }
};
