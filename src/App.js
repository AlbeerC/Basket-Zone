import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';
import DetailContainer from './components/DetailContainer/DetailContainer'
import Cart from './components/Cart/Cart';
import AboutUs from './components/AboutUs/AboutUs';
import Help from './components/Help/Help';
import Favorites from './components/Favorites/Favorites';
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
// Context
import CartProvider from './context/CartContext';
import FavoritesProvider from './context/FavoritesContext';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
            <CartProvider>
              <NavbarTop />
              <Navbar />
              <Routes>
                <Route path='/' element={<ProductsContainer />} />
                <Route path='/category/:categoryId' element={<ProductsContainer />} />
                <Route path='/detail/:detailId' element={<DetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/help' element={<Help />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/register' element={<SignIn />} />
                <Route path='/myaccount' element={<Dashboard />}/>
              </Routes>
              <Footer />
            </CartProvider>
          </FavoritesProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
