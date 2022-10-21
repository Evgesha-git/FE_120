import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import './App.css';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Home from './components/Home';
import Abaut from './components/Abaut';
import Cart from './components/Cart';
import Product from './components/Product';

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path={'/'} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={'catalog'} element={<Catalog />} />
          <Route path={'catalog/:productId'} element={<Product />} />
          <Route path='abaut' element={<Abaut />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;

export { CartContext };

