import * as React from "react";
import CardSort from "../components/CardSort";
import Categories from "../components/Categories";
import Skeleton from "../components/ProductBlock/Skeleton";
import ProductBlock from "../components/ProductBlock";
import { IData } from "../types";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
];

function ShopPage() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [sortType, setSortType] = React.useState({
    name: "cost (DESC)",
    sortProperty: "price",
  });

  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

    fetch(
      `https://63a9d76d7d7edb3ae619c28b.mockapi.io/products${
        categoryId ? `?category=${categories[categoryId]}` : "?"
      }&sortBy=${sortType.sortProperty.replace("-", "")}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setProducts(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <>
      <aside className="filters-block">
        <CardSort
          value={sortType}
          onChangeSort={(obj: { name: string; sortProperty: string }) =>
            setSortType(obj)
          }
        />
      </aside>
      <section className="section-shop">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <h2 className="section-shop__title">{categories[categoryId]}</h2>
        <div className="section-shop__items">
          {isLoading
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : products.map((product: IData) => (
                <ProductBlock {...product} key={product.id} />
              ))}
        </div>
      </section>
    </>
  );
}

export default ShopPage;
