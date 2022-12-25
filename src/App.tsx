import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';

import Header from './components/Template/Header/index';
import Main from './components/Template/Main/index';
import Footer from './components/Template/Footer/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
