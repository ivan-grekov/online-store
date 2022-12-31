import * as React from 'react';
import './App.scss';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import CardPage from './pages/CardPage';

import type { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';

interface ContextState {
  searchValue: string;
  setSearchValue: (param: string) => void;
}

export const SearchContext = React.createContext({} as ContextState);

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<ShopPage />} />
              <Route path="/basket" element={<BasketPage />} />
              <Route path="/card" element={<CardPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
