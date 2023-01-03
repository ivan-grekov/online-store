import { BasketItem } from '../redux/basket/types';

export const calcTotalPrice = (items: BasketItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
