import { Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
// import Catalog from './components/Catalog';
import Header from './components/Header';
import Home from './components/Home';


// import Abaut from './components/Abaut';
// import Cart from './components/Cart';
// import Product from './components/Product';

const Abaut = lazy(() => import('./components/Abaut'));
const Cart = lazy(() => import('./components/Cart'));
const Product = lazy(() => import('./components/Product'));
const Catalog = lazy(() => import('./components/Catalog'));

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path={'/'} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={'catalog'} element={
            <Suspense fallback={'Loading...'}>
              <Catalog />
            </Suspense>
          } />
          <Route path={'catalog/:productId'} element={
            <Suspense fallback={'Loading...'}>
              <Product />
            </Suspense>
          } />
          <Route path='abaut' element={
            <Suspense fallback={'Loading...'}>
              <Abaut />
            </Suspense>
          } />
          <Route path='cart' element={
            <Suspense fallback={'Loading...'}>
              <Cart />
            </Suspense>
          } />
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;

export { CartContext };

