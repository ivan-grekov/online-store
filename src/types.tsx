export interface IData {
  key: number;
  id: number;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
