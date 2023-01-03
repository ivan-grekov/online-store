import * as React from 'react';
import CardSort, { listOfSort } from '../components/CardSort';
import Categories from '../components/Categories';
import Skeleton from '../components/ProductBlock/Skeleton';
import ProductBlock from '../components/ProductBlock';
import { IData } from '../types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import { setFilters, setCategoryId } from '../redux/slices/filterSlice';

const categories = [
  'All',
  'Electronics',
  'Jewelery',
  "Men's clothing",
  "Women's clothing",
];

const ShopPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId, sort, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listOfSort.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
    }
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://63a9d76d7d7edb3ae619c28b.mockapi.io/products${
          categoryId ? `?category=${categories[categoryId]}` : '?'
        }&sortBy=${sort.sortProperty.replace('-', '')}&order=${order}${search}`
      )
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue]);

  // Create query string with params for navigate
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue]);

  const prods = products.map((product: IData) => (
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
            : prods}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
