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
import {
  generateSprintData,
  getGameData,
} from '../../services/generateGameData';
import CountDown from '../CountDown/CountDown';
import { selectSignInData } from '../Forms/AuthFormSlice';

function SprintGameField(): JSX.Element {
  const dispatch = useAppDispatch();
  const gameWordsUnit = useAppSelector(selectGameWordsUnit);
  const gameWordsUnitPage = useAppSelector(selectGameWordsUnitPage);
  const currentQuestionIndex = useAppSelector(selectCurrentQustionIndex);
  const isPopupOpened = useAppSelector(selectIsPopupOpened);
  const results = useAppSelector(selectGameResults);
  const { isSignIn } = useAppSelector(selectSignInData);

  const [isWordsDataLoaded, setIsWordsDataLoaded] = useState(false);
  const [questions, setQuestions] = useState([] as JSX.Element[]);

  useEffect(() => {
    const fetchWordsData = async (unit: number, page: number) => {
      const questionsData = await getGameData({
        isSignIn,
        unit,
        page,
        generateGameData: generateSprintData,
      });

      setIsWordsDataLoaded(true);
      dispatch(setQuestionsData(questionsData));

      setQuestions(
        questionsData.map((questionData) => (
          <SprintQuestion key={questionData.id} />
        ))
      );
    };

    if (gameWordsUnit && gameWordsUnitPage) {
      fetchWordsData(gameWordsUnit - 1, gameWordsUnitPage - 1);
    }
  }, [dispatch, isSignIn, gameWordsUnit, gameWordsUnitPage]);

  const handleCloseGameBtnClick = () => dispatch(switchPopup());

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
