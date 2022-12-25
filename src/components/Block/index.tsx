/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.scss';

function Block() {
  return(
    <div className="block block__category category">
              <h3 className="category__title title">Category</h3>
              <ul className="category__list">
                <li className="category__item">
                  <a href="" className="category__item-link link">
                    electronics
                  </a>
                </li>
                <li className="category__item">
                  <a href="" className="category__item-link link">
                    jewelery
                  </a>
                </li>
                <li className="category__item">
                  <a href="" className="category__item-link link">
                    men's clothing
                  </a>
                </li>
                <li className="category__item">
                  <a href="" className="category__item-link link">
                    women's clothing
                  </a>
                </li>
              </ul>
            </div>
  )
}

export default Block