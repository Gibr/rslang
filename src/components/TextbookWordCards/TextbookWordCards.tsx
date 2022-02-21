import './TextbookWordCards.scss';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IUserWordsData, IWordsData } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
  selectWordsData,
  setWordsData,
} from '../TextbookNav/textbookNavSlice';
import {
  getUserDifficultWords,
  getUserWords,
  getWords,
} from '../../api/words/words';
import { selectSignInData } from '../Forms/AuthFormSlice';
import WordCard from '../WordCard/WordCard';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../../app/constants/global';

function TextbookWordCards(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useSelector(selectCurrentUnitPage);
  const wordsData = useAppSelector(selectWordsData);
  const { isSignIn } = useAppSelector(selectSignInData);

  const generateWords = (data: IWordsData) =>
    data.map((word, index) => (
      <WordCard wordData={word} key={word.id} index={index} />
    ));

  const generateUserWords = (data: IUserWordsData) =>
    data.map((word, index) => (
      // eslint-disable-next-line no-underscore-dangle
      <WordCard wordData={word} key={word._id} index={index} />
    ));

  const words = isSignIn
    ? generateUserWords(wordsData as IUserWordsData)
    : generateWords(wordsData as IWordsData);

  useEffect(() => {
    const fetchData = async () => {
      if (isSignIn) {
        const { token, userId } = JSON.parse(
          localStorage.getItem('userData') || ''
        );

        if (currentUnit === TEXTBOOK_DIFFICULT_UNIT_NUM) {
          const difficultWords = await getUserDifficultWords({
            token,
            userId,
            page: currentUnitPage - 1,
          });

          dispatch(setWordsData(difficultWords[0].paginatedResults));
        } else {
          const userWordsData = await getUserWords({
            token,
            userId,
            unit: currentUnit - 1,
            page: currentUnitPage - 1,
            wordsPerPage: 20,
          });

          dispatch(setWordsData(userWordsData[0].paginatedResults));
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
