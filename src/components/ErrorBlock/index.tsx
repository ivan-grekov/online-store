import * as React from 'react';
import styles from './ErrorBlock.module.scss';

function ErrorBlock() {
  return (
    <div className={styles.root}>
      <h1 className={styles.root}>
        <span className={styles.root}>😢</span>
        <br />
        Products not found :(
      </h1>
      <p className="description">
        Unfortunately, this page is not available in our online-store
      </p>
    </div>
  );
}

export default ErrorBlock;
