import * as React from "react";

function BasketPage() {
  return (
    <div className="basket__wrapper">
      <h1 className="basket__title">Basket</h1>
      <section className="basket__content">
        <div className="basket__top">
          <h2 className="basket__subtitle">Products in basket</h2>
          <span className="count-of-products">items: 1</span>
          <button>Clear basket</button>
        </div>
        <div className="content__items"></div>
      </section>
    </div>
  );
}

export default BasketPage;
