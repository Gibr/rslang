import React from 'react';
import './GameResult.scss';
import { generateWordAudioUrl } from '../../app/constants/api';
import { IResultData } from '../../pages/Games/gameplaySlice';

interface GameResultProps {
  type: string;
  results: Array<IResultData>;
}

function GameResult(props: GameResultProps): JSX.Element {
  const { type, results } = props;

  const getPronunciation = (wordPronunciation: string): void => {
    new Audio(generateWordAudioUrl(wordPronunciation)).play();
  };

  return (
    <div className="game-result">
      <div className="game-result__head">
        <span className="game-result__type">{type}</span>
        <span className={`game-result__count game-result__count_${type}`}>
          {results.length}
        </span>
      </div>
      <ul className="game-result__list">
        {results.map((item) => {
          return (
            <li className="game-result__item" key={item.id}>
              <button
                className="game-result__button"
                type="button"
                aria-label="audio"
                onClick={(e) => {
                  getPronunciation(item.wordPronunciation);
                }}
              />
              <span className="game-result__word">{item.word}</span>
              <span className="game-result__translate"> — {item.word}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GameResult;
