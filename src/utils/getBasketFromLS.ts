import { BasketItem } from '../redux/basket/types';
import { calcTotalPrice } from './calcTotalPrice';

export const getBasketFromLS = () => {
  const data = localStorage.getItem('basket');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as BasketItem[],
    totalPrice,
  };
};
