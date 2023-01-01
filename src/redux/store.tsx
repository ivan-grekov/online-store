import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import basket from './basket/slice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    basket,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
