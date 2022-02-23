import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NUMBER_OF_TEXTBOOK_UNIT_PAGES } from '../../app/constants/global';
import AppRoutes from '../../app/constants/routes';
import type { AppThunk, RootState } from '../../app/store';
import {
  IAudioChallengeQuestionData,
  ISprintQuestionData,
} from '../../services/generateGameData';
import { getRandomNum } from '../../utils/utils';

export type IResultData = {
  id: string;
  word: string;
  wordTranslation: string;
  wordPronunciation: string;
  answered?: string;
};

export interface IGameplayState {
  gameWordsUnit: number | null;
  gameWordsUnitPage: number | null;
  questionsData: (ISprintQuestionData | IAudioChallengeQuestionData)[];
  currentQuestionIndex: number;
  resultsData: IResultData[];
}

const initialState: IGameplayState = {
  gameWordsUnit: 1,
  gameWordsUnitPage: 1,
  questionsData: [],
  currentQuestionIndex: 0,
  resultsData: [],
};

export const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {
    resetGameplayState: (state) => {
      state.gameWordsUnit = null;
      state.gameWordsUnitPage = null;
      state.questionsData = [];
      state.currentQuestionIndex = 0;
      state.resultsData = [];
    },
    setGameWordsUnit: (state, action: PayloadAction<number>) => {
      state.gameWordsUnit = action.payload;
    },
    setGameWordsUnitPage: (state, action: PayloadAction<number>) => {
      state.gameWordsUnitPage = action.payload;
    },
    setQuestionsData: (
      state,
      action: PayloadAction<
        (ISprintQuestionData | IAudioChallengeQuestionData)[]
      >
    ) => {
      state.questionsData = action.payload;
    },
    incrementCurrentQuestionIndex: (state) => {
      state.currentQuestionIndex += 1;
    },
    addQuestionResultData: (state, action: PayloadAction<IResultData>) => {
      state.resultsData.push(action.payload);
    },
  },
});

export const {
  resetGameplayState,
  setGameWordsUnit,
  setGameWordsUnitPage,
  setQuestionsData,
  incrementCurrentQuestionIndex,
  addQuestionResultData,
} = gameplaySlice.actions;

export const selectGameWordsUnit = (state: RootState) =>
  state.gameplay.gameWordsUnit;
export const selectGameWordsUnitPage = (state: RootState) =>
  state.gameplay.gameWordsUnitPage;
export const selectQuestionsData = (state: RootState) =>
  state.gameplay.questionsData;
export const selectCurrentQustionIndex = (state: RootState) =>
  state.gameplay.currentQuestionIndex;
export const selectGameResults = (state: RootState) =>
  state.gameplay.resultsData;

export const setGameWordsUnitAndPage =
  (pathname: string): AppThunk =>
  (dispatch, getState) => {
    const state = getState();

    if (pathname.startsWith(AppRoutes.TEXTBOOK)) {
      dispatch(setGameWordsUnit(state.textbookNav.currentUnit));
      dispatch(setGameWordsUnitPage(state.textbookNav.currentUnitPage));
    } else {
      dispatch(
        setGameWordsUnitPage(getRandomNum(1, NUMBER_OF_TEXTBOOK_UNIT_PAGES))
      );
    }
  };

export default gameplaySlice.reducer;
