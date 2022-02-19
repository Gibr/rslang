import './GameUnitSelect.scss';

import React from 'react';
import { unitsData } from '../../app/data/units';
import { useAppDispatch } from '../../app/hooks';
import { setGameWordsUnit } from '../../pages/Games/gameplaySlice';

function GameUnitSelect(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="unit-select-container">
      {unitsData.map((unit) => {
        return (
          <li className="unit-select" key={unit.num}>
            <button
              className="unit-select__btn"
              type="button"
              onClick={() => {
                dispatch(setGameWordsUnit(unit.num));
              }}
            >
              UNIT {unit.num} words
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default GameUnitSelect;
