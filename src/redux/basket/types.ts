export type BasketItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  count: number;
};

export interface BasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}
