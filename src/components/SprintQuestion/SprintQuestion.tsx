import './SprintQuestion.scss';

import React from 'react';
import { IQuestionData } from '../GameWrapper/gameplaySlice';

type Iprops = {
  wordData: IQuestionData;
  answerHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    questionData: IQuestionData
  ) => void;
};

function SprintQuestion(props: Iprops): JSX.Element {
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
          Wrong
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
          Correct
        </button>
      </div>
    </div>
  );
}

export default SprintQuestion;
