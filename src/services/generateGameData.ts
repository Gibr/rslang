import { IWordsData } from '../app/types';
import { getRandomNum, shuffleArr } from '../utils/utils';

export type ISprintQuestionData = {
  id: string;
  word: string;
  wordTranslationToShow: string;
  correctWordTranslation: string;
  wordPronunciation: string;
};

export type IAudioChallengeQuestionData = {
  // create yuor own data object type
  id: string;
  word: string;
};

export const generateSprintData = (
  wordsData: IWordsData
): ISprintQuestionData[] => {
  const sprintData = [];

  for (let i = 0; i < wordsData.length; i += 1) {
    const possibleTranslations = [
      wordsData[i].wordTranslate,
      wordsData[getRandomNum(0, wordsData.length - 1)].wordTranslate,
    ];
    const questionData = {
      id: wordsData[i].id,
      word: wordsData[i].word,
      wordTranslationToShow:
        possibleTranslations[getRandomNum(0, possibleTranslations.length - 1)],
      correctWordTranslation: wordsData[i].wordTranslate,
      wordPronunciation: wordsData[i].audio,
    };
    sprintData.push(questionData);
  }
  return shuffleArr(sprintData);
};

export const generateAudioChallengeData = (
  wordsData: IWordsData
): IAudioChallengeQuestionData[] => {
  const audioChallengeData = [];

  for (let i = 0; i < wordsData.length; i += 1) {
    const questionData = {
      id: wordsData[i].id,
      word: wordsData[i].word,
      // create yuor own data object
    };
    audioChallengeData.push(questionData);
  }

  return shuffleArr(audioChallengeData);
};

export default generateSprintData;
