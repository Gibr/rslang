import './TextbookWordCards.scss';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IWordsData } from '../../app/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
  selectWordsData,
  setWordsData,
} from '../TextbookNav/textbookNavSlice';
import { getWords } from '../../api/words/words';
import { selectSignInData } from '../Forms/AuthFormSlice';
import WordCard from '../WordCard/WordCard';
import { getUserWordsData } from '../../services/generateGameData';

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
        const userWordsData = await getUserWordsData(
          currentUnit - 1,
          currentUnitPage - 1
        );

        dispatch(setWordsData(userWordsData));
      } else {
        const data = await getWords(currentUnit - 1, currentUnitPage - 1);
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
