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

type IGameplay = Array<IQuestionData>;

export interface IGameplayState {
  resultsData: IGameplay;
}

const initialState: IGameplayState = {
  resultsData: [],
};

export const gameplaySlice = createSlice({
  name: 'gameplay',
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
  gameplaySlice.actions;

export const selectGameResults = (state: RootState) =>
  state.gameplay.resultsData;

export default gameplaySlice.reducer;
