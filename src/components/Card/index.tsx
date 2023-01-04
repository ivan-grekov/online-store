import styles from './Card.module.scss';

function Card() {
  return (
    <div className={`${styles.wrapper} ${styles.cards}`}>
      <h3 className={styles.cards__name}>
        Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III
        2.5
      </h3>
      <div className={styles.cards__block}>
        <img
          src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
          alt="name"
          className={styles.cards__img}
        />
        <div className={styles.cards__discription}>
          3D NAND flash are applied to deliver high transfer speeds Remarkable
          transfer speeds that enable faster bootup and improved overall system
          performance. The advanced SLC Cache Technology allows performance
          boost and longer lifespan 7mm slim design suitable for Ultrabooks and
          Ultra-slim notebooks. Supports TRIM command, Garbage Collection
          technology, RAID, and ECC (Error Checking & Correction) to provide the
          optimized performance and enhanced reliability.
          <div className={styles.block__bottom}>
            <div className="product-block__price">$ 100</div>
            <button
              // onClick={onClickAdd}
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
              {/* {addedCount > 0 && <i>{addedCount}</i>} */}
            </button>
          </div>
        </div>
        <div className="product-block__bottom"></div>
      </div>
    </div>
  );
}

export default Card;
