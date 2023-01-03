import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import basket from './basket/slice';

export const store = configureStore({
  reducer: {
    filter,
    basket,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
