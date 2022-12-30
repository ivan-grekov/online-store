import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/images/logo-img.png';
import { Link } from 'react-router-dom';
import Search from '../Search';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Search />
        <div className={styles.totalPrice}>
          <span>Cart total: 280</span>
        </div>
        <Link to="/basket">
          <div className={styles.basket}>
            <div className="basket__total">
              <span className="basket__total-content"></span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
