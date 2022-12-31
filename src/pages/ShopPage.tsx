import * as React from 'react';
import CardSort from '../components/CardSort';
import Categories from '../components/Categories';
import Skeleton from '../components/ProductBlock/Skeleton';
import ProductBlock from '../components/ProductBlock';
import { IData } from '../types';
import { SearchContext } from './../App';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCategoryId } from '../redux/slices/filterSlice';
import { setSortType } from '../redux/slices/filterSlice';
const categories = [
  'All',
  'Electronics',
  'Jewelery',
  "Men's clothing",
  "Women's clothing",
];

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state: RootState) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://63a9d76d7d7edb3ae619c28b.mockapi.io/products${
        categoryId ? `?category=${categories[categoryId]}` : '?'
      }&sortBy=${sort.sortProperty.replace('-', '')}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setProducts(arr);
        setIsLoading(false);
      });
  }, [categoryId, sort.sortProperty, searchValue]);

  const prod = products.map((product: IData) => (
    <ProductBlock {...product} key={product.id} />
  ));

  return (
    <>
      <aside className="filters-block">
        <CardSort />
      </aside>
      <section className="section-shop">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => dispatch(setCategoryId(id))}
        />
        <h2 className="section-shop__title">{categories[categoryId]}</h2>
        <div className="section-shop__items">
          {isLoading
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : prod}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
