import styles from './Card.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { IData } from '../../types';
import { ReactComponent as PlusImage } from '../../assets/svg/plus_img.svg';
import { BasketItem } from '../../redux/basket/types';
import { addItem } from '../../redux/basket/slice';
import { useDispatch } from 'react-redux';

const Card: React.FC = () => {
  const [product, setProduct] = React.useState<{
    image: string;
    title: string;
    description: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://63a9d76d7d7edb3ae619c28b.mockapi.io/products/'
        );
        const currentProduct = data.find(
          (product: IData) => product.id === Number(id)
        );
        setProduct(currentProduct);
      } catch (error) {
        alert('Error when receiving the product!');
        navigate('/');
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div className={`${styles.wrapper} ${styles.cards}`}>
      <h3 className={styles.cards__name}>{product.title}</h3>
      <div className={styles.cards__block}>
        <div className={styles.cards__imgBlock}>
          <img src={product.image} alt="name" className={styles.cards__img} />
          <div className={styles.block__price}>$ {product.price}</div>
        </div>
        <div className={styles.cards__discription}>
          <p>{product.description}</p>
          <div className={styles.block__bottom}>
            <Link to="/">
              <button className="button button--outline button--add">
                <span>Back</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="product-block__bottom"></div>
      </div>
    </div>
  );
};

export default Card;
