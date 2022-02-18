import './GameWrapper.scss';

import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import AppRoutes from '../../app/constants/routes';
import { selectCurrentUnit } from '../TextbookNav/textbookNavSlice';
import GameUnitSelect from '../GameUnitSelect/GameUnitSelect';
import { selectSavedURL } from '../NavMenu/NavMenuSlice';
import { selectIsPopupOpened } from '../PopupWrapper/popupWrapperSlice';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import GameResultsPopup from '../GameResultsPopup/GameResultsPopup';

type Iprops = {
  gameName: string;
  gameContent: JSX.Element;
};

function GameWrapper(props: Iprops): JSX.Element {
  const { gameName, gameContent } = props;

  const prevPageURL = useAppSelector(selectSavedURL);
  const texbookCurrentUnit = useAppSelector(selectCurrentUnit);
  const isPopupOpened = useAppSelector(selectIsPopupOpened);

  const isSelectUnitToShow = !prevPageURL.startsWith(AppRoutes.TEXTBOOK);

  type ISelectedUnit = string | null;
  const [selectedUnit, setSelectedUnit] = useState(
    isSelectUnitToShow ? (null as ISelectedUnit) : texbookCurrentUnit.toString()
  );

  return (
    <main className={`page-wrapper ${gameName}__page-wrapper`}>
      {isPopupOpened && (
        <PopupWrapper
          popupName="game-results"
          popupContent={<GameResultsPopup />}
        />
      )}
      <div className={`container ${gameName}__container`}>
        {isSelectUnitToShow && !selectedUnit && (
          <GameUnitSelect setSelectedUnit={setSelectedUnit} />
        )}
        {selectedUnit && gameContent}
      </div>
    </main>
  );
}

export default GameWrapper;
