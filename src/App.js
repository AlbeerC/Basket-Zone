import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar';
import NavbarTop from './components/NavbarTop/NavbarTop';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import Footer from './components/Footer/Footer';
import DetailContainer from './components/DetailContainer/DetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductsContainer />} />
        <Route path='/category/:categoryId' element={<ProductsContainer />} />
        <Route path='/detail/:detailId' element={<DetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
