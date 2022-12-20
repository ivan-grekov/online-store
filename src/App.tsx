import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import logo from "./assets/images/logo-img.png";

function App() {
  return (
    <BrowserRouter>
      <header>
        <div>
          <a className="logo">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav>na</nav>
      </header>
    </BrowserRouter>
  );
}

export default App;
