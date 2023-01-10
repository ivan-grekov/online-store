import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/basket/slice';
import { BasketItem as BasketItemType } from '../redux/basket/types';
import { ReactComponent as Minus_icon } from '../../src/assets/svg/minus_icon.svg';
import { ReactComponent as Plus_icon } from '../../src/assets/svg/plusLit_icon.svg';
import { ReactComponent as Cross_icon } from '../../src/assets/svg/cross_icon.svg';

interface BasketItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  count: number;
  image: string;
}

export const BasketItem: React.FC<BasketItemProps> = ({
  id,
  title,
  description,
  price,
  count,
  image,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as BasketItemType)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm('Do you really want to delete the product?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={image} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <Minus_icon />
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <Plus_icon />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} $</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          <Cross_icon />
        </div>
      </div>
    </div>
  );
};
