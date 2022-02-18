import { IWordsData } from '../app/data/words';
import { IQuestionData } from '../components/GameWrapper/gameplaySlice';
import { getRandomNum, shuffleArr } from '../utils/utils';

const generateSprintData = (wordsData: IWordsData): IQuestionData[] => {
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

export default generateSprintData;
