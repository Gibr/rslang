import './TextbookWordCards.scss';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IWordsData } from '../../app/types';
import WordCard from '../WordCard/WordCard';
import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectCurrentUnitPage,
} from '../TextbookNav/textbookNavSlice';
import getWords from '../../api/words/words';

function TextbookWordCards(): JSX.Element {
  const currentUnit = useAppSelector(selectCurrentUnit);
  const currentUnitPage = useSelector(selectCurrentUnitPage);
  const [wordsData, setWordsData] = useState([]);

  const generateWords = (data: IWordsData) =>
    data.map((word) => <WordCard wordData={word} key={word.id} />);
  const words = generateWords(wordsData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWords(currentUnit, currentUnitPage);
      setWordsData(data);
    };

    fetchData();
  }, [currentUnit, currentUnitPage]);

  return (
    <ul className="textbook__words">
      {wordsData.length ? words : <div className="loading">Loading...</div>}
    </ul>
  );
}

export default TextbookWordCards;
