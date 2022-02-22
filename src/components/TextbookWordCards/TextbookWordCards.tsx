import './TextbookWordCards.scss';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IUserWord, IWordData, IWordsData } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
  selectWordsData,
  setWordsData,
} from '../TextbookNav/textbookNavSlice';
import {
  getAllUserWords,
  getUserDifficultWords,
  getWords,
} from '../../api/words/words';
import { selectSignInData } from '../Forms/AuthFormSlice';
import WordCard from '../WordCard/WordCard';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../../app/constants/global';
import { locStorageKeys } from '../../app/constants/api';

function TextbookWordCards(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useSelector(selectCurrentUnitPage);
  const wordsData = useAppSelector(selectWordsData);
  const { isSignIn } = useAppSelector(selectSignInData);

  const generateWords = (data: IWordsData) =>
    data.map((word, index) => (
      <WordCard wordData={word} key={word.word} index={index} />
    ));

  const words = generateWords(wordsData);

  useEffect(() => {
    const fetchData = async () => {
      if (isSignIn) {
        const { token, userId } = JSON.parse(
          localStorage.getItem(locStorageKeys.USER_DATA) || ''
        );

        if (currentUnit === TEXTBOOK_DIFFICULT_UNIT_NUM) {
          const difficultWords = await getUserDifficultWords({
            token,
            userId,
            page: currentUnitPage - 1,
          });

          dispatch(setWordsData(difficultWords[0].paginatedResults));
        } else {
          const data = await getWords(currentUnit, currentUnitPage);
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

          dispatch(setWordsData(userWords));
        }
      } else {
        const data = await getWords(currentUnit, currentUnitPage);
        dispatch(setWordsData(data));
      }
    };

    fetchData();
  }, [dispatch, isSignIn, currentUnit, currentUnitPage]);

  return (
    <ul className="textbook__words">
      {wordsData.length ? words : <div className="loading">Loading...</div>}
    </ul>
  );
}

export default TextbookWordCards;
