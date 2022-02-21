import { generateWordAudioUrl } from '../app/constants/api';

export const getRandomNum = (min: number, max: number) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

export const shuffleArr = <T>(arr: Array<T>): Array<T> => {
  return arr.sort(() => Math.random() - 0.5);
};

const audio = new Audio();
export const playPronunciation = (
  audioFileList: Array<string>,
  initialIndex?: number
): void => {
  let curentIndex = initialIndex || 0;
  audio.src = generateWordAudioUrl(audioFileList[curentIndex]);
  audio.play();

  if (curentIndex + 1 < audioFileList.length) {
    audio.onended = () => {
      audio.src = generateWordAudioUrl(audioFileList[(curentIndex += 1)]);
      audio.play();
    };
  }
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
