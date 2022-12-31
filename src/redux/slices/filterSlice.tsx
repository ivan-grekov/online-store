import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: 'popular (DESC)',
    sortProperty: 'rate',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
