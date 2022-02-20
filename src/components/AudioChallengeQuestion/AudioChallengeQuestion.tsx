import './AudioChallengeQuestion.scss';

import React from 'react';
import playLogo from '../../assets/icons/audio.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  addQuestionResultData,
  incrementCurrentQuestionIndex,
  selectCurrentQustionIndex,
  selectQuestionsData,
} from '../../pages/Games/gameplaySlice';
import { IAudioChallengeQuestionData } from '../../services/generateGameData';
import { baseUrl } from '../../app/constants/api';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';

const audio = new Audio();

function AudioChallengeQuestion(): JSX.Element {
  const dispatch = useAppDispatch();
  const questionsData = useAppSelector(selectQuestionsData);
  const currentQuestionIndex = useAppSelector(selectCurrentQustionIndex);
  const question = questionsData[
    currentQuestionIndex
  ] as IAudioChallengeQuestionData;

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

  audio.src = `${baseUrl}/${question.wordPronunciation}`;
  audio.oncanplaythrough = audio.play;

  return (
    <>
      <button
        className="audio-challenge__play-button audio-challenge__button"
        type="button"
        onClick={() => audio.play()}
      >
        <img className="play-button__image" src={playLogo} alt="say word" />
      </button>
      <ul className="audio-challenge__words-list">
        {question.allAnswers.map((el, index) => (
          <li className="words-list__item" key={el}>
            <button
              className="words-list__variant-button audio-challenge__button"
              type="button"
              data-answer={question.word === el ? 'correct' : 'wrong'}
              onClick={handleAnswerBtnClick}
            >
              <span className="variant-button__number">{index + 1}</span>
              {el}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AudioChallengeQuestion;
