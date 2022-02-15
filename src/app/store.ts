import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';
import navMenuReducer from '../components/NavMenu/NavMenuSlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
    navMenu: navMenuReducer,
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
