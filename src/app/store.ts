import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import popupWrapperReducer from '../components/PopupWrapper/popupWrapperSlice';
import loginBtnReducer from '../components/LoginBtn/LoginBtnSlice';
import BurgerReducer from '../components/Burger/BurgerSlice';
import authFormReducer from '../components/Forms/AuthFormSlice';
import gameplayReducer from '../pages/Games/gameplaySlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    popup: popupWrapperReducer,
    loginBtn: loginBtnReducer,
    burger: BurgerReducer,
    authForm: authFormReducer,
    gameplay: gameplayReducer,
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
