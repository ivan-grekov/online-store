/* eslint-disable jsx-a11y/anchor-is-valid */

import '../../../assets/scss/main.scss';
import './style.scss';
import logo from '../../../assets/images/logo-img.png';
import basket from '../../../assets/svg/bytesize_cart.svg';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo__block">
            <a className="logo">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className="navigation">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="" className="nav__item-link">
                  ShopPage
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__item-link">
                  CardPage
                </a>
              </li>
              <li className="nav__item">
                <a href="" className="nav__item-link">
                  BasketPage
                </a>
              </li>
            </ul>
          </nav>
          <div className="basket">
            <a className="link basket__link" href="#">
            <img className='basket__icon' src={basket} alt="basket" />
            </a>
            <span className="basket__amount">3</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
