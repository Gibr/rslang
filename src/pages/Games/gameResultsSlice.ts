import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export type IQuestionData = {
  id: string;
  word: string;
  wordTranslationToShow: string;
  correctWordTranslation: string;
  wordPronunciation: string;
  answered?: string;
};

type IGameResults = Array<IQuestionData>;

export interface IGameResultsState {
  resultsData: IGameResults;
}

const initialState: IGameResultsState = {
  resultsData: [],
};

export const gameResultsSlice = createSlice({
  name: 'gameResults',
  initialState,
  reducers: {
    addQuestionResultData: (state, action: PayloadAction<IQuestionData>) => {
      state.resultsData.push(action.payload);
    },
    clearGameResultsData: (state) => {
      state.resultsData = [];
    },
  },
});

export const { addQuestionResultData, clearGameResultsData } =
  gameResultsSlice.actions;

export const selectGameResults = (state: RootState) =>
  state.gameResults.resultsData;

export default gameResultsSlice.reducer;
