import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import loginBtnReducer from '../components/LoginBtn/LoginBtnSlice';
import authFormReducer from '../components/Forms/AuthFormSlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    loginBtn: loginBtnReducer,
    authForm: authFormReducer,
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
