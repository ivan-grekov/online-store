import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  searchValue: string;
}

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: 'popular (DESC)',
    sortProperty: 'rate',
  },
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setSortType, setSearchValue, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
