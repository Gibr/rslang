import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DEFAULT_TEXTBOOK_UNIT,
  DEFAULT_TEXTBOOK_UNIT_PAGE,
  NUMBER_OF_TEXTBOOK_UNIT_PAGES,
} from '../../app/constants/global';
import type { RootState } from '../../app/store';
import { IUserWordsData, IWordsData } from '../../app/types';

type IUpdateWordIsDifficult = {
  index: number;
  value: string;
};
export interface ITextbookNavState {
  currentUnit: number;
  currentUnitPage: number;
  wordsData: IWordsData | IUserWordsData;
}

const initialState: ITextbookNavState = {
  currentUnit: DEFAULT_TEXTBOOK_UNIT,
  currentUnitPage: DEFAULT_TEXTBOOK_UNIT_PAGE,
  wordsData: [],
};

export const textbookNavSlice = createSlice({
  name: 'texbookNav',
  initialState,
  reducers: {
    setCurrentUnit: (state, action: PayloadAction<number>) => {
      state.currentUnit = action.payload;
    },
    setCurrentUnitPage: (state, action: PayloadAction<number>) => {
      state.currentUnitPage = action.payload;
    },
    incrementCurrentUnitPage: (state) => {
      if (state.currentUnitPage === NUMBER_OF_TEXTBOOK_UNIT_PAGES) {
        state.currentUnitPage = 1;
      } else {
        state.currentUnitPage += 1;
      }
    },
    decrementCurrentUnitPage: (state) => {
      if (state.currentUnitPage === 1) {
        state.currentUnitPage = NUMBER_OF_TEXTBOOK_UNIT_PAGES;
      } else {
        state.currentUnitPage -= 1;
      }
    },
    setWordsData: (
      state,
      action: PayloadAction<IWordsData | IUserWordsData>
    ) => {
      state.wordsData = action.payload;
    },
    updateWordIsDifficult: (
      state,
      action: PayloadAction<IUpdateWordIsDifficult>
    ) => {
      const { index, value } = action.payload;
      state.wordsData[index] = {
        ...state.wordsData[index],
        difficulty: value,
      };
    },
    deleteWordData: (state, action: PayloadAction<number>) => {
      state.wordsData.splice(action.payload, 1);
    },
  },
});

export const {
  setCurrentUnit,
  incrementCurrentUnitPage,
  decrementCurrentUnitPage,
  setCurrentUnitPage,
  setWordsData,
  updateWordIsDifficult,
  deleteWordData,
} = textbookNavSlice.actions;

export const selectCurrentUnit = (state: RootState) =>
  state.textbookNav.currentUnit;
export const selectCurrentUnitPage = (state: RootState) =>
  state.textbookNav.currentUnitPage;
export const selectWordsData = (state: RootState) =>
  state.textbookNav.wordsData;

export default textbookNavSlice.reducer;
