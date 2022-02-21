import './WordCard.scss';

import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentUnit,
  selectWordsData,
  updateWordIsDifficult,
} from '../TextbookNav/textbookNavSlice';
import { generateWordImageUrl } from '../../app/constants/api';
import loader from '../../assets/icons/loading.gif';
import { selectSignInData } from '../Forms/AuthFormSlice';
import { createUserWord, updateUserWord } from '../../api/words/words';
import { IUserWordData, IWordData } from '../../app/types';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../../app/constants/global';

function WordCard(props: {
  wordData: IWordData | IUserWordData;
  index: number;
}): JSX.Element {
  const { wordData, index } = props;

  const dispatch = useAppDispatch();
  const currentUnit = useAppSelector(selectCurrentUnit);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(loader);

  const wordsData = useAppSelector(selectWordsData);
  const { isSignIn } = useAppSelector(selectSignInData);

  useEffect(() => {
    const fetchImage = async () => {
      const img = new Image();
      img.src = generateWordImageUrl(wordData.image);

      img.onload = () => {
        setImageSrc(img.src);
        setIsImageLoaded(true);
      };
    };
    fetchImage();
  }, [wordData]);

  const addToDifficult = () => {
    const userData = JSON.parse(localStorage.getItem('userData') || '');
    const { token, userId } = userData;
    const wordOptions = { difficulty: 'hard' };

    dispatch(
      updateWordIsDifficult({
        // eslint-disable-next-line no-underscore-dangle
        index,
        value: 'hard',
      })
    );

    if ('userWord' in wordsData[index]) {
      updateUserWord({
        token,
        userId,
        // eslint-disable-next-line no-underscore-dangle
        wordId: (wordData as IUserWordData)._id,
        wordOptions,
      });
    } else {
      createUserWord({
        token,
        userId,
        // eslint-disable-next-line no-underscore-dangle
        wordId: (wordData as IUserWordData)._id,
        wordOptions,
      });
    }
  };

  const deleteFromDifficult = () => {
    // console.log('remove');
  };

  const checkIsDifficult = () => {
    if ('userWord' in wordData) {
      return wordData.userWord?.difficulty === 'hard';
    }
    return false;
  };

  return (
    <li className={`word-card${checkIsDifficult() ? ' difficult' : ''}`}>
      <div className="card__content">
        <div
          className="content__image"
          style={{
            backgroundImage: `url(${imageSrc}`,
            backgroundSize: `${isImageLoaded ? 'cover' : '30% auto'}`,
          }}
        />
        <div className="content__text">
          <div className="text__block word-block">
            <div className="block__item word__original">{wordData.word}</div>
            <button
              className="word__play-btn"
              type="button"
              aria-label="pronunciation button"
            />
            <div className="block__item word__transcription">
              {wordData.transcription}
            </div>
            <div className="block__item translation word__translation">{`-- ${wordData.wordTranslate}`}</div>
          </div>
          <div
            className={`text__block meaning-block color-unit-${currentUnit}`}
          >
            <div className="block__item original meaning__original">
              <span className="original__icon"> &#9755;</span>
              <span>{parse(wordData.textMeaning)}</span>
            </div>
            <div className="block__item translation meaning__translation">
              {wordData.textMeaningTranslate}
            </div>
          </div>
          <div
            className={`text__block example-block color-unit-${currentUnit}`}
          >
            <div className="block__item original example__original">
              <span className="original__icon"> &#9755;</span>
              <span>{parse(wordData.textExample)}</span>
            </div>
            <div className="block__item translation example__translation">
              {wordData.textExampleTranslate}
            </div>
          </div>
        </div>
      </div>
      {isSignIn && (
        <div className="card__controls">
          <div className="statistic">
            <span className="icon" />
            <span className="text">12/17</span>
          </div>
          <div className="btns-wrap">
            <button
              type="button"
              className="controls__btn learned-btn"
              aria-label="toggle to learned"
            />
            <button
              type="button"
              className={`controls__btn ${
                currentUnit === TEXTBOOK_DIFFICULT_UNIT_NUM
                  ? 'difficult-remove-btn'
                  : 'difficult-btn'
              }`}
              aria-label="toggle to difficult"
              onClick={
                currentUnit === TEXTBOOK_DIFFICULT_UNIT_NUM
                  ? deleteFromDifficult
                  : addToDifficult
              }
              disabled={
                checkIsDifficult() &&
                currentUnit !== TEXTBOOK_DIFFICULT_UNIT_NUM
              }
            />
          </div>
        </div>
      )}
    </li>
  );
}

export default WordCard;
