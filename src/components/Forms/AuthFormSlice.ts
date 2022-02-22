import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locStorageKeys } from '../../app/constants/api';
import type { RootState } from '../../app/store';

export interface IAuthState {
  isSignIn: boolean;
  name: string;
}

const savedAuthData = localStorage.getItem(locStorageKeys.USER_DATA);

const initialState: IAuthState = {
  isSignIn: !!savedAuthData,
  name: savedAuthData ? JSON.parse(savedAuthData).name : '',
};

export const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<IAuthState>) => {
      state.isSignIn = action.payload.isSignIn;
      state.name = action.payload.name;
    },
  },
});

export const selectSignInData = (state: RootState) => state.authForm;

export const { setSignIn } = authFormSlice.actions;

export default authFormSlice.reducer;
