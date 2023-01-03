import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import basket from './basket/slice';
import product from './product/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    basket,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
