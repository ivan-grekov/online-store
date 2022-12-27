import * as React from "react";
import "./App.scss";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
