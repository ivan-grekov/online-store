import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <input className={styles.root} placeholder="Search product..."></input>
  );
};

export default Search;
