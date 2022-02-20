import { generateWordAudioUrl } from '../app/constants/api';

export const getRandomNum = (min: number, max: number) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

// TODO to fix "any" if possible
// eslint-disable-next-line
export const shuffleArr = (arr: Array<any>) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const playPronunciation = (
  audioFileList: Array<string>,
  initialIndex?: number
): void => {
  let curentIndex = initialIndex || 0;
  const audio = new Audio(generateWordAudioUrl(audioFileList[curentIndex]));
  audio.play();

  if (curentIndex + 1 < audioFileList.length) {
    audio.onended = () => {
      audio.src = generateWordAudioUrl(audioFileList[(curentIndex += 1)]);
      audio.play();
    };
  }
};
