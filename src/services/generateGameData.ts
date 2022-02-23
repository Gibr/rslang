import {
  getAllUserWords,
  getUserDifficultWords,
  getWords,
} from '../api/words/words';
import { locStorageKeys } from '../app/constants/api';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../app/constants/global';
import { IUserWord, IWordData, IWordsData } from '../app/types';
import { getRandomNum, shuffleArr } from '../utils/utils';

export type ISprintQuestionData = {
  id: string;
  word: string;
  wordTranslationToShow: string;
  correctWordTranslation: string;
  wordPronunciation: string;
};

export type IAudioChallengeQuestionData = {
  id: string;
  word: string;
  wordPronunciation: string;
  correctWordTranslation: string;
  allAnswers: string[];
};

export type IGameQuestionsData = Array<
  ISprintQuestionData | IAudioChallengeQuestionData
>;

export type IGetGameDataParams = {
  isSignIn: boolean;
  unit: number;
  page: number;
  generateGameData: (wordsData: IWordsData) => IGameQuestionsData;
};

export const getUserWordsData = async (unit: number, page: number) => {
  const { token, userId } = JSON.parse(
    localStorage.getItem(locStorageKeys.USER_DATA) || ''
  );

  if (unit === TEXTBOOK_DIFFICULT_UNIT_NUM) {
    const difficultWords = await getUserDifficultWords({
      token,
      userId,
      page,
    });

    return difficultWords[0].paginatedResults;
  }

  const data = await getWords(unit, page);
  const userWordsData = await getAllUserWords(token, userId);

  const userWords = data.map((word: IWordData) => {
    const isInUserWords = userWordsData.find(
      (el: IUserWord) => el.wordId === word.id
    );
    if (isInUserWords) {
      return {
        ...word,
        difficulty: isInUserWords ? isInUserWords.difficulty : 'weak',
        learned:
          isInUserWords && 'optional' in isInUserWords
            ? isInUserWords.optional.learned
            : false,
      };
    }
    return word;
  });

  return userWords;
};

export const getGameData = (params: IGetGameDataParams) => {
  const { isSignIn, unit, page, generateGameData } = params;

  const gameQuestionsData = [] as IGameQuestionsData;

  const fetchWords = async (wordsPage: number): Promise<IGameQuestionsData> => {
    let wordsData: IWordsData;

    if (isSignIn) {
      wordsData = await getUserWordsData(unit, wordsPage);
    } else {
      wordsData = await getWords(unit, page);
    }

    const questionsData = generateGameData(
      wordsData.filter((word) => !word.learned)
    );
    gameQuestionsData.push(...questionsData);

    if (gameQuestionsData.length < 20) {
      if (wordsPage > 0) {
        return fetchWords(wordsPage - 1);
      }
    }
    return shuffleArr(gameQuestionsData.slice(0, 20));
  };

  return fetchWords(page);
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
  return sprintData;
};

export const generateAudioChallengeData = (
  wordsData: IWordsData
): IAudioChallengeQuestionData[] => {
  const audioChallengeData = [];
  const generateAllAnswers = (currentIndex: number) => {
    const usedIndexes = [currentIndex];
    const allAnswers = [wordsData[currentIndex].word];
    for (let i = 0; i < 4; i += 1) {
      let fakeWordIndex;
      do {
        fakeWordIndex = Math.round(Math.random() * (wordsData.length - 1));
      } while (usedIndexes.includes(fakeWordIndex));
      allAnswers.push(wordsData[fakeWordIndex].word);
      usedIndexes.push(fakeWordIndex);
    }
    return shuffleArr(allAnswers);
  };

  for (let i = 0; i < wordsData.length; i += 1) {
    const questionData = {
      id: wordsData[i].id,
      word: wordsData[i].word,
      wordPronunciation: wordsData[i].audio,
      correctWordTranslation: wordsData[i].wordTranslate,
      allAnswers: generateAllAnswers(i),
    };
    audioChallengeData.push(questionData);
  }
  return audioChallengeData;
};

export default generateSprintData;
