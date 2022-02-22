import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  isOpened: boolean;
}

const initialState: IInitialState = {
  isOpened: false,
};

export const BurgerSlice = createSlice({
  name: 'Burger',
  initialState,
  reducers: {
    switchBurger: (state) => {
      if (state.isOpened) {
        state.isOpened = false;
      } else {
        state.isOpened = true;
      }
    },
    closeBurger: (state) => {
      state.isOpened = false;
    },
  },
});

export const { switchBurger, closeBurger } = BurgerSlice.actions;

export default BurgerSlice.reducer;
