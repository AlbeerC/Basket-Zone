import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import ProductsCard from './components/ProductsCard/ProductsCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/card' element={<ProductsCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
