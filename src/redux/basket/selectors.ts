import { RootState } from '../store';

export const selectCart = (state: RootState) => state.basket;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.basket.items.find((obj) => obj.id === id);
