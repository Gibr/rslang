import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  isOpened: boolean;
}

const initialState: IInitialState = {
  isOpened: false,
};

export const LoginBtnSlice = createSlice({
  name: 'LoginBtn',
  initialState,
  reducers: {
    switchPopup: (state) => {
      if (state.isOpened) {
        state.isOpened = false;
      } else {
        state.isOpened = true;
      }
    },
  },
});

export const { switchPopup } = LoginBtnSlice.actions;

export default LoginBtnSlice.reducer;
