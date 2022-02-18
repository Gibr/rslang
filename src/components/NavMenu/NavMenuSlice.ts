import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface INavMenuState {
  url: string;
}

const initialState: INavMenuState = {
  url: '/',
};

export const navMenuSlice = createSlice({
  name: 'navMenu',
  initialState,
  reducers: {
    saveURL: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { saveURL } = navMenuSlice.actions;

export const selectSavedURL = (state: RootState) => state.navMenu.url;

export default navMenuSlice.reducer;
