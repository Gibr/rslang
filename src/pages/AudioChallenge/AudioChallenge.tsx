import './AudioChallenge.scss';
import React from 'react';
import playLogo from '../../assets/icons/audio.svg';

function AudioChallenge(): JSX.Element {
  const wordsList = ['1word', '2word', '3long-long-word', '4word', '5word'];
  return (
    <main className="page-wrapper audio-challenge__page-wrapper">
      <div className="container audio-challenge__container">
        <button
          className="audio-challenge__play-button audio-challenge__button"
          type="button"
        >
          <img className="play-button__image" src={playLogo} alt="say word" />
        </button>
        <ul className="audio-challenge__words-list">
          {wordsList.map((el, index) => (
            <li className="words-list__item">
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
      </div>
    </main>
  );
}

export default AudioChallenge;
