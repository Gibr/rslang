import './AudioChallengeQuestion.scss';

import React from 'react';
import playLogo from '../../assets/icons/audio.svg';
/* import { useAppSelector } from '../../app/hooks';
import {
  selectCurrentQustionIndex,
  selectQuestionsData,
} from '../../pages/Games/gameplaySlice';
import { IAudioChallengeQuestionData } from '../../services/generateGameData'; */

function AudioChallengeQuestion(): JSX.Element {
  // const questionsData = useAppSelector(selectQuestionsData);
  // const currentQuestionIndex = useAppSelector(selectCurrentQustionIndex);

  const wordsList = ['1word', '2word', '3long-long-word', '4word', '5word'];

  /* const question = questionsData[
    currentQuestionIndex
  ] as IAudioChallengeQuestionData; */
  // console.log('currentQuestionIndex - ', currentQuestionIndex);
  // console.log('question - ', question);

  return (
    <>
      <button
        className="audio-challenge__play-button audio-challenge__button"
        type="button"
      >
        <img className="play-button__image" src={playLogo} alt="say word" />
      </button>
      <ul className="audio-challenge__words-list">
        {wordsList.map((el, index) => (
          <li className="words-list__item" key={el}>
            <button
              className="words-list__variant-button audio-challenge__button"
              type="button"
            >
              <span className="variant-button__number">{index + 1}</span>
              {el}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="audio-challenge__next-button audio-challenge__button"
        type="button"
      >
        NEXT
      </button>
    </>
  );
}

export default AudioChallengeQuestion;
