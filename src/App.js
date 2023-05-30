import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';
import DetailContainer from './components/DetailContainer/DetailContainer'
import Cart from './components/Cart/Cart';
// Context
import CartProvider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductsContainer />} />
          <Route path='/category/:categoryId' element={<ProductsContainer />} />
          <Route path='/detail/:detailId' element={<DetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
