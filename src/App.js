import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Products from './components/productspage/Products';
import Footer from './components/Footer';
import References from './components/referencespage/References';
import Services from './components/servicespage/Services';
import Blog from './components/blogpage/Blog';


function App() {
  return (
    <div>
      <div className='px-3'>
      <Navbar/>
      </div>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/references" element={<References/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
        </Routes>

      <Footer/>
     
    </div>
  );
}

export default App;
