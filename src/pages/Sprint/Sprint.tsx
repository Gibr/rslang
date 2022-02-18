import './Sprint.scss';

import React, { useState } from 'react';
import SprintQuestion from '../../components/SprintQuestion/SprintQuestion';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addQuestionResultData,
  IQuestionData,
  selectGameResults,
} from '../../components/GameWrapper/gameplaySlice';
import { switchPopup } from '../../components/PopupWrapper/popupWrapperSlice';
import generateSprintData from '../../services/generateGameData';
import words from '../../app/data/words';
import GameWrapper from '../../components/GameWrapper/GameWrapper';

function Sprint(): JSX.Element {
  const dispatch = useAppDispatch();
  const results = useAppSelector(selectGameResults);

  const handleAnswerBtnClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    questionData: IQuestionData
  ) => {
    dispatch(
      addQuestionResultData({
        ...questionData,
        answered: event.currentTarget.dataset.answer,
      })
    );

    questions.splice(0, 1);

    if (questions.length) {
      setCurrentQuestion(questions[0]);
    } else {
      dispatch(switchPopup());
    }
  };

  const questionsData = generateSprintData(words);
  const questions = questionsData.map((questionData) => (
    <SprintQuestion
      key={questionData.id}
      wordData={questionData}
      answerHandler={handleAnswerBtnClick}
    />
  ));

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  // TODO implement timer
  // TODO implement game-close process
  // TODO implement keyboard game controls

  return (
    <GameWrapper
      gameName="sprint"
      gameContent={
        <>
          <div className="sprint__controls">
            <div className="timer-output">60</div>
            <button
              className="close-game-btn"
              type="button"
              aria-label="close game"
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
              {currentQuestion}
            </div>
          </div>
        </>
      }
    />
  );
}

export default Sprint;
