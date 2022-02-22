import './SprintGameField.scss';

import React, { useEffect, useState } from 'react';
import SprintQuestion from '../SprintQuestion/SprintQuestion';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectCurrentQustionIndex,
  selectGameResults,
  selectGameWordsUnit,
  selectGameWordsUnitPage,
  setQuestionsData,
} from '../../pages/Games/gameplaySlice';
import {
  selectIsPopupOpened,
  switchPopup,
} from '../PopupWrapper/popupWrapperSlice';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import GameResultsPopup from '../GameResultsPopup/GameResultsPopup';
import { generateSprintData } from '../../services/generateGameData';
import { getUserDifficultWords, getWords } from '../../api/words/words';
import CountDown from '../CountDown/CountDown';
import { TEXTBOOK_DIFFICULT_UNIT_NUM } from '../../app/constants/global';
import { locStorageKeys } from '../../app/constants/api';

function SprintGameField(): JSX.Element {
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

      const questionsData = generateSprintData(wordsData);
      dispatch(setQuestionsData(questionsData));

      setQuestions(
        questionsData.map((questionData) => (
          <SprintQuestion key={questionData.id} />
        ))
      );
    };

    if (gameWordsUnit && gameWordsUnitPage) {
      fetchWordsData(gameWordsUnit, gameWordsUnitPage);
    }
  }, [dispatch, gameWordsUnit, gameWordsUnitPage]);

  const handleCloseGameBtnClick = () => dispatch(switchPopup());

  // TODO implement game-close process
  // TODO implement keyboard game controls

  const content = isWordsDataLoaded ? (
    <>
      <div className="sprint__controls">
        <CountDown initialSeconds={60} />
        <button
          className="close-game-btn"
          type="button"
          aria-label="close game"
          onClick={handleCloseGameBtnClick}
        />
      </div>
      <div className="sprint__gamefield">
        <div className="gamefield__progress">
          {results.map((questionData) => (
            <span
              className={`progres__mark ${questionData.answered}-answer-mark`}
              key={questionData.id}
            />
          ))}
        </div>
        <div className="gamefield__questions-container">
          {questions[currentQuestionIndex]}
        </div>
      </div>
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

export default SprintGameField;
