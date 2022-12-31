import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo-img.png';
import { Link } from 'react-router-dom';
import Search from '../Search';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Search />
        <div className="total-price">
          <span>Cart total: 280</span>
        </div>
        <Link to="/basket">
          <div className="basket">
            <div className="basket__total">
              <span className="basket__total-content"></span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
