import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Products from './components/productspage/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <div className='px-3'>
      <Navbar/>
      </div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}></Route>
        </Routes>

      <Footer/>
     
    </div>
  );
}

export default App;
