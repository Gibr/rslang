import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface IPopupWrapperState {
  isOpened: boolean;
}

const initialState: IPopupWrapperState = {
  isOpened: false,
};

export const popupWrapperSlice = createSlice({
  name: 'popupWrapper',
  initialState,
  reducers: {
    switchPopup: (state) => {
      if (state.isOpened) {
        state.isOpened = false;
      } else {
        state.isOpened = true;
      }
    },
    openPopup: (state) => {
      state.isOpened = true;
    },
  },
});

export const { switchPopup, openPopup } = popupWrapperSlice.actions;

export const selectIsPopupOpened = (state: RootState) => state.popup.isOpened;

export default popupWrapperSlice.reducer;
