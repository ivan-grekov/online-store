import * as React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import BasketPage from './pages/BasketPage';
import CardPage from './pages/CardPage';

function App() {
  return (
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
      <Footer />
    </div>
  );
}

export default App;
