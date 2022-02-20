import './Sprint.scss';

import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectGameWordsUnit } from '../gameplaySlice';
import GameUnitSelect from '../../../components/GameUnitSelect/GameUnitSelect';
import SprintGameField from '../../../components/SprintGameField/SprintGameField';

function Sprint(): JSX.Element {
  const gameWordsUnit = useAppSelector(selectGameWordsUnit);

  // TODO implement timer
  // TODO implement game-close process
  // TODO implement keyboard game controls

  return (
    <main className="page-wrapper sprint__page-wrapper">
      <div className="container sprint__container">
        {!gameWordsUnit ? <GameUnitSelect /> : <SprintGameField />}
      </div>
    </main>
  );
}

export default Sprint;
