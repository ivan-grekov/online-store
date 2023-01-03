import { RootState } from '../store';

export const selectBasket = (state: RootState) => state.basket;

export const selectBasketItemById = (id: number) => (state: RootState) =>
  state.basket.items.find((obj) => obj.id === id);
