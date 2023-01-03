import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'product/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Product[]>(
      `https://63a9d76d7d7edb3ae619c28b.mockapi.io/products`,
      {
        params: pickBy(
          {
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );
    return data;
  }
);
