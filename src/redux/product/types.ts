export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rate: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchProductParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
};

export interface ProductSliceState {
  items: Product[];
  status: Status;
}
