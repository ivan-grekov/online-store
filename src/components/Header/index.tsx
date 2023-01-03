import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo-img.png';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { useSelector } from 'react-redux';
import { selectBasket } from '../../redux/basket/selectors';
import { useLocation } from 'react-router';

export const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectBasket);
  const location = useLocation();
  const isMounted = React.useRef(false);

  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('basket', json);
    }
    isMounted.current = true;
  }, [items]);

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
          <span>Cart total price: {totalPrice} $</span>
        </div>
        <Link to="/basket">
          <div className="basket">
            <div className="basket__total">
              <span className="basket__total-content">{totalCount}</span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
