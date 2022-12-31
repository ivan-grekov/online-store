import React from 'react';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Search = () => {
  const dispatch = useDispatch();
  // const [value, setValue] = React.useState<string>('');
  const { searchValue } = useSelector((state: RootState) => state.filter);

  // const updateSearchValue = React.useCallback(
  //   debounce((str: string) => {
  //     dispatch(setSearchValue(str));
  //   }, 150),
  //   []
  // );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
    // updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <FaSearch className={styles.search__icon} />
      <input
        value={searchValue}
        className={styles.input}
        placeholder="Search product..."
        onChange={onChangeInput}
      ></input>
    </div>
  );
};

export default Search;
