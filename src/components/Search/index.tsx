import React from 'react';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <FaSearch className={styles.search__icon} />
      <input
        value={value}
        className={styles.input}
        placeholder="Search product..."
        onChange={onChangeInput}
      ></input>
    </div>
  );
};

export default Search;
