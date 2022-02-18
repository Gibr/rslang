import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import popupWrapperReducer from '../components/PopupWrapper/popupWrapperSlice';
import navMenuReducer from '../components/NavMenu/NavMenuSlice';
import loginBtnReducer from '../components/LoginBtn/LoginBtnSlice';
import gameplayReducer from '../components/GameWrapper/gameplaySlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    navMenu: navMenuReducer,
    popup: popupWrapperReducer,
    loginBtn: loginBtnReducer,
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
