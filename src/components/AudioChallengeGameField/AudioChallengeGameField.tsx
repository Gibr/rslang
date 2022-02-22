import './AudioChallengeGameField.scss';

import React, { useEffect, useState } from 'react';
import { getUserDifficultWords, getWords } from '../../api/words/words';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentQustionIndex,
  selectGameResults,
  selectGameWordsUnit,
  selectGameWordsUnitPage,
  setQuestionsData,
} from '../../pages/Games/gameplaySlice';
import { selectIsPopupOpened } from '../PopupWrapper/popupWrapperSlice';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import GameResultsPopup from '../GameResultsPopup/GameResultsPopup';
import { generateAudioChallengeData } from '../../services/generateGameData';
import AudioChallengeQuestion from '../AudioChallengeQuestion/AudioChallengeQuestion';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../../app/constants/global';
import { locStorageKeys } from '../../app/constants/api';

function AudioChallengeGameField(): JSX.Element {
  const dispatch = useAppDispatch();
  const gameWordsUnit = useAppSelector(selectGameWordsUnit);
  const gameWordsUnitPage = useAppSelector(selectGameWordsUnitPage);
  const currentQuestionIndex = useAppSelector(selectCurrentQustionIndex);
  const isPopupOpened = useAppSelector(selectIsPopupOpened);
  const results = useAppSelector(selectGameResults);

  const [isWordsDataLoaded, setIsWordsDataLoaded] = useState(false);
  const [questions, setQuestions] = useState([] as JSX.Element[]);

  useEffect(() => {
    const fetchWordsData = async (unit: number, page: number) => {
      let wordsData;

      if (unit === TEXTBOOK_DIFFICULT_UNIT_NUM) {
        const { token, userId } = JSON.parse(
          localStorage.getItem(locStorageKeys.USER_DATA) || ''
        );
        const res = await getUserDifficultWords({
          token,
          userId,
          page: page - 1,
        });

        wordsData = res[0].paginatedResults;
      } else {
        wordsData = await getWords(unit, page);
      }

      setIsWordsDataLoaded(true);

      const questionsData = generateAudioChallengeData(wordsData);
      dispatch(setQuestionsData(questionsData));

      setQuestions(
        questionsData.map((questionData) => (
          <AudioChallengeQuestion key={questionData.id} />
        ))
      );
    };

    if (gameWordsUnit && gameWordsUnitPage) {
      fetchWordsData(gameWordsUnit, gameWordsUnitPage);
    }
  }, [dispatch, gameWordsUnit, gameWordsUnitPage]);

  const content = isWordsDataLoaded ? (
    <>
      <div className="gamefield__progress audio-challenge__progress">
        {results.map((questionData) => (
          <span
            className={`progres__mark ${questionData.answered}-answer-mark`}
            key={questionData.id}
          />
        ))}
      </div>
      <div className="question-wrapper">{questions[currentQuestionIndex]}</div>
    </>
  ) : (
    <div className="loading">Loading ...</div>
  );

  return (
    <main className="page-wrapper sprint__page-wrapper">
      <div className="container sprint__container">
        {isPopupOpened && (
          <PopupWrapper
            popupName="game-results"
            popupContent={<GameResultsPopup />}
          />
        )}
        {content}
      </div>
    </main>
  );
}

export default AudioChallengeGameField;
