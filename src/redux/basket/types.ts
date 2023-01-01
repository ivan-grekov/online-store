export type BasketItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface BasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}
