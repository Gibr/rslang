import './AudioChallenge.scss';

import React from 'react';
import GameUnitSelect from '../../../components/GameUnitSelect/GameUnitSelect';
import { useAppSelector } from '../../../app/hooks';
import { selectGameWordsUnit } from '../gameplaySlice';
import AudioChallengeGameField from '../../../components/AudioChallengeGameField/AudioChallengeGameField';

function AudioChallenge(): JSX.Element {
  const gameWordsUnit = useAppSelector(selectGameWordsUnit);

  return (
    <main className="page-wrapper audio-challenge__page-wrapper">
      <div className="container sprint__container">
        {!gameWordsUnit ? <GameUnitSelect /> : <AudioChallengeGameField />}
      </div>
    </main>
  );
}

export default AudioChallenge;
