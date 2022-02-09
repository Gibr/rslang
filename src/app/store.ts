import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import loginBtnReducer from '../components/LoginBtn/LoginBtnSlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    loginBtn: loginBtnReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
