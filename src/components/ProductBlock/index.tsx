import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBasketItemById } from '../../redux/basket/selectors';
import { addItem } from '../../redux/basket/slice';
import { BasketItem } from '../../redux/basket/types';
import { ReactComponent as PlusImage } from '../../assets/svg/plus_img.svg';

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
          <PlusImage />
          <span>Add</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default ProductBlock;
