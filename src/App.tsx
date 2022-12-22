import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from './components/AppRouter';


import Header from './components/Template/Header/index';

function App() {
  return (
    <BrowserRouter>
      <Header />

    </BrowserRouter>
  );
}

export default App;
