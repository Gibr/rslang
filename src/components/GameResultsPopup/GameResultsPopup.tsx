import './GameResultsPopup.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';
import {
  useAppDispatch,
  // useAppSelector
} from '../../app/hooks';
// import { selectGameResults } from '../../pages/Games/gameplaySlice';
import AppRoutes from '../../app/constants/routes';

function GameResultsPopup(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const gameResults = useAppSelector(selectGameResults);
  // console.log(gameResults);

  const handleClosePopupBtnClick = () => {
    dispatch(switchPopup());
    navigate(AppRoutes.MAIN_SCREEN);
  };

  return (
    <>
      <button
        className="popup__close-btn game-results-popup__close-btn"
        type="button"
        aria-label="close popup"
        onClick={handleClosePopupBtnClick}
      />
      <div className="popup__content game-results-popup__content" />
    </>
  );
}

export default GameResultsPopup;
