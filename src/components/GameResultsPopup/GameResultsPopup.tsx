import './GameResultsPopup.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearGameResultsData,
  selectGameResults,
  IQuestionData,
} from '../../pages/Games/gameResultsSlice';
import AppRoutes from '../../app/constants/routes';
import GameResult from '../GameResult/GameResult';
import { ResultsType } from '../../app/constants/global';

function GameResultsPopup(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const gameResults = useAppSelector(selectGameResults);
  console.log(gameResults);

  const handleClosePopupBtnClick = () => {
    dispatch(clearGameResultsData());
    dispatch(switchPopup());
    navigate(AppRoutes.MAIN_SCREEN);
  };

  const resultsCorrect: Array<IQuestionData> = [];
  const resultsWrong: Array<IQuestionData> = [];

  gameResults.forEach((item) => {
    switch (item.answered) {
      case ResultsType.CORRECT:
        resultsCorrect.push(item);
        break;
      case ResultsType.WRONG:
        resultsWrong.push(item);
        break;
      default:
        break;
    }
  });

  return (
    <>
      <button
        className="popup__close-btn game-results-popup__close-btn"
        type="button"
        aria-label="close popup"
        onClick={handleClosePopupBtnClick}
      />
      <div className="popup__content game-results-popup__content">
        <GameResult type={ResultsType.CORRECT} results={resultsCorrect} />
        <GameResult type={ResultsType.WRONG} results={resultsWrong} />
      </div>
    </>
  );
}

export default GameResultsPopup;
