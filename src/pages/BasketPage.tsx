import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BasketImg from '../assets/svg/basket_img.svg';
import BasketClear from '../assets/svg/basketClear_img.svg';
import ButtonBack from '../assets/svg/button_back.svg';

// import { BasketItem, BasketEmpty } from '../components';

// import { selectBasket } from '../redux/cart/selectors';
// import { clearItems } from '../redux/cart/slice';

const BasketPage: React.FC = () => {
  const dispatch = useDispatch();
  // const { totalPrice, items } = useSelector(selectCart);

  // const totalCount = items.reduce(
  //   (sum: number, item: any) => sum + item.count,
  //   0
  // );

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      // dispatch(clearItems());
    }
  };

  // if (!totalPrice) {
  //   // return <CartEmpty />;
  // }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <img src={BasketImg} alt="basket image" />
          <h2 className="content__title">Basket</h2>
          <div onClick={onClickClear} className="cart__clear">
            <img src={BasketClear} alt="basket-clear image" />
            <span>Clear basket</span>
          </div>
        </div>
        <div className="content__items">
          {/* {items.map((item: any) => (
            <BasketItem key={item.id} {...item} />
          ))} */}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {' '}
              All products: <b>{10}</b>{' '}
            </span>
            <span>
              {' '}
              Order price: <b>{2250} ₽</b>{' '}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <img src={ButtonBack} alt="button back symbol" />
              <span>Come back</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
