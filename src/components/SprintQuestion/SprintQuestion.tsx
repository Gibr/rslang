import './SprintQuestion.scss';

import React from 'react';
import { IQuestionData } from '../../pages/Games/gameResultsSlice';

function SprintQuestion(props: {
  wordData: IQuestionData;
  answerHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    questionData: IQuestionData
  ) => void;
}): JSX.Element {
  const { wordData, answerHandler } = props;

  return (
    <div className="game__question-wrapper">
      <div className="question__word">{wordData.word}</div>
      <div className="question__word-translation">
        {wordData.wordTranslationToShow}
      </div>
      <div className="question__answer-btns-container">
        <button
          className="question__answer-btn wrong-btn"
          type="button"
          data-answer={
            wordData.wordTranslationToShow !== wordData.correctWordTranslation
              ? 'correct'
              : 'wrong'
          }
          onClick={(event) => answerHandler(event, wordData)}
        >
          Неверно
        </button>
        <button
          className="question__answer-btn correct-btn"
          type="button"
          data-answer={
            wordData.wordTranslationToShow === wordData.correctWordTranslation
              ? 'correct'
              : 'wrong'
          }
          onClick={(event) => answerHandler(event, wordData)}
        >
          Верно
        </button>
      </div>
    </div>
  );
}

export default SprintQuestion;
