import './AudioChallengeNav.scss';

import React from 'react';
import { NUMBER_OF_TEXTBOOK_UNITS } from '../../app/constants/global';

const unitArray = new Array(NUMBER_OF_TEXTBOOK_UNITS + 1)
  .fill(null)
  .map((el, index) => (index + 1).toString());
unitArray[unitArray.length - 1] = 'Difficult';

function AudioChallengeNav(): JSX.Element {
  return (
    <ul className="audio-challenge-nav__unit-list">
      {unitArray.map((el) => {
        return (
          <li>
            <button
              className="audio-challenge-nav__button audio-challenge__button"
              type="button"
            >
              UNIT {el} words
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default AudioChallengeNav;
