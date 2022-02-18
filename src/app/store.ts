import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import popupWrapperReducer from '../components/PopupWrapper/popupWrapperSlice';
import gameplayReducer from '../components/GameWrapper/gameplaySlice';
import navMenuReducer from '../components/NavMenu/NavMenuSlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    navMenu: navMenuReducer,
    popup: popupWrapperReducer,
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
