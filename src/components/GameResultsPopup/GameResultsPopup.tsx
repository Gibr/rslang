import './GameResultsPopup.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchPopup } from '../PopupWrapper/popupWrapperSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  IResultData,
  selectGameResults,
  selectQuestionsData,
} from '../../pages/Games/gameplaySlice';
import AppRoutes from '../../app/constants/routes';
import { ISprintQuestionData } from '../../services/generateGameData';
import GameResult from '../GameResult/GameResult';
import { ResultsType } from '../../app/constants/global';

function GameResultsPopup(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const gameQuestionsData = useAppSelector(selectQuestionsData);
  const gameResults = useAppSelector(selectGameResults);
  const totalGameResults = [...gameResults];

  if (totalGameResults.length !== gameQuestionsData.length) {
    const unansweredQuestionsData = gameQuestionsData.slice(
      totalGameResults.length,
      gameQuestionsData.length
    );

    unansweredQuestionsData.forEach((question) => {
      totalGameResults.push({
        id: question.id,
        word: question.word,
        wordTranslation: (question as ISprintQuestionData)
          .correctWordTranslation,
        wordPronunciation: (question as ISprintQuestionData).wordPronunciation,
        answered: 'wrong',
      });
    });
  }

  const handleClosePopupBtnClick = () => {
    dispatch(switchPopup());
    navigate(AppRoutes.MAIN_SCREEN);
  };

  const resultsCorrect: Array<IResultData> = [];
  const resultsWrong: Array<IResultData> = [];

  totalGameResults.forEach((item) => {
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
        {/* {JSON.stringify(totalGameResults)} */}
      </div>
    </>
  );
}

export default GameResultsPopup;
