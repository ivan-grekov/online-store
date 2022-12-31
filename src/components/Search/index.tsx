import React from 'react';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <FaSearch className={styles.search__icon} />
      <input
        value={searchValue}
        className={styles.input}
        placeholder="Search product..."
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
