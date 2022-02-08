import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import textbookNavReducer from '../components/TextbookNav/textbookNavSlice';

export const store = configureStore({
  reducer: {
    textbookNav: textbookNavReducer,
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
