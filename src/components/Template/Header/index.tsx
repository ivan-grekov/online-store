/* eslint-disable jsx-a11y/anchor-is-valid */

import '../../../assets/scss/main.scss';
import './style.scss';
import logo from '../../../assets/images/logo-img.png';

function Header() {
  return (
    <header className="header">
      <div>
        <a className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul className="nav__list">
          <li className="nav__item"><a href="" className="nav__item-link">ShopPage</a></li>
          <li className="nav__item"><a href="" className="nav__item-link">CardPage</a></li>
          <li className="nav__item"><a href="" className="nav__item-link">BasketPage</a></li>
        </ul>
      </nav>
      <div className="basket">
        <a className="link basket__link" href="#">
          <i className="basket__icon icon"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
