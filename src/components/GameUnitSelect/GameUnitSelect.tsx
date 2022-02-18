import './GameUnitSelect.scss';

import React from 'react';
import { unitsData } from '../../app/data/units';

type Iprops = {
  setSelectedUnit: React.Dispatch<React.SetStateAction<string | null>>;
};

function GameUnitSelect(props: Iprops): JSX.Element {
  const { setSelectedUnit } = props;

  return (
    <ul className="unit-select-container">
      {unitsData.map((unit) => {
        return (
          <li className="unit-select" key={unit.num}>
            <button
              className="unit-select__btn"
              type="button"
              onClick={() => {
                setSelectedUnit(unit.num.toString());
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
