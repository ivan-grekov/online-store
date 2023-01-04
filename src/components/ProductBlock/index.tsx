import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBasketItemById } from '../../redux/basket/selectors';
import { addItem } from '../../redux/basket/slice';
import { BasketItem } from '../../redux/basket/types';

interface ProductBlockProps {
  key: number;
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rate: number;
  count: number;
}

export const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  title,
  description,
  price,
  image,
  rate,
}) => {
  const dispatch = useDispatch();
  const basketItem = useSelector(selectBasketItemById(id));
  const addedCount = basketItem ? basketItem.count : 0;

  const onClickAdd = () => {
    const item: BasketItem = {
      id,
      title,
      description,
      price,
      image,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="product-block">
      <div className="rate">
        <span className="rate-star">
          {' '}
          <FaStar style={{ color: 'orange' }} />
        </span>
        <span>{rate}</span>
      </div>
      <Link key={id} to={`/product/${id}`}>
        <img className="product-block__image" src={image} alt="card" />
        <h4 className="product-block__title">{title}</h4>
      </Link>
      <div className="product-block__bottom">
        <div className="product-block__price">$ {price}</div>
        <button
          onClick={onClickAdd}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default ProductBlock;
