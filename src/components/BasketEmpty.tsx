import React from 'react';
import { Link } from 'react-router-dom';

import basketEmptyImg from '../assets/images/empty-basket.png';

export const BasketEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Basket is empty <span>😕</span>
    </h2>
    <p>
      Most likely, you haven't ordered products yet.
      <br />
      To order a product, go to the main page.
    </p>
    <img src={basketEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Come back</span>
    </Link>
  </div>
);
