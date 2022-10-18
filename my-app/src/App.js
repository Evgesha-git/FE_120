import { Routes, Route } from 'react-router-dom';
import './App.css';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Home from './components/Home';
import Abaut from './components/Abaut';
import Cart from './components/Cart';
import Product from './components/Product';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Header />}>
        <Route index element={<Home/>}/>
        <Route path={'catalog'} element={<Catalog />} />
        <Route path={'catalog/:productId'} element={<Product/>}/>
        <Route path='abaut' element={<Abaut/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;
