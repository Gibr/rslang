import './SprintQuestion.scss';

import React from 'react';
import {
  addQuestionResultData,
  incrementCurrentQuestionIndex,
  selectCurrentQustionIndex,
  selectQuestionsData,
} from '../../pages/Games/gameplaySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';
import { ISprintQuestionData } from '../../services/generateGameData';

function SprintQuestion(): JSX.Element {
  const dispatch = useAppDispatch();
  const questionsData = useAppSelector(selectQuestionsData);
  const currentQuestionIndex = useAppSelector(selectCurrentQustionIndex);

  const question = questionsData[currentQuestionIndex] as ISprintQuestionData;

  const handleAnswerBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      addQuestionResultData({
        id: question.id,
        word: question.word,
        wordTranslation: question.correctWordTranslation,
        wordPronunciation: question.wordPronunciation,
        answered: event.currentTarget.dataset.answer,
      })
    );

    if (currentQuestionIndex < questionsData.length - 1) {
      dispatch(incrementCurrentQuestionIndex());
    } else {
      dispatch(switchPopup());
    }
  };

  return (
    <div className="game__question-wrapper">
      <div className="question__word">{question.word}</div>
      <div className="question__word-translation">
        {question.wordTranslationToShow}
      </div>
      <div className="question__answer-btns-container">
        <button
          className="question__answer-btn wrong-btn"
          type="button"
          data-answer={
            question.wordTranslationToShow !== question.correctWordTranslation
              ? 'correct'
              : 'wrong'
          }
          onClick={handleAnswerBtnClick}
        >
          Wrong
        </button>
        <button
          className="question__answer-btn correct-btn"
          type="button"
          data-answer={
            question.wordTranslationToShow === question.correctWordTranslation
              ? 'correct'
              : 'wrong'
          }
          onClick={handleAnswerBtnClick}
        >
          Correct
        </button>
      </div>
    </div>
  );
}

export default SprintQuestion;
