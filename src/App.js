import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/homepage/Home';
import Products from './components/productspage/Products';
import Footer from './components/Footer';
import References from './components/referencespage/References';
import Services from './components/servicespage/Services';
import Blog from './components/blogpage/Blog';
import About from './components/aboutpage/About';
import Contactspage from './components/contactpage/Contactspage';


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
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contactspage/>}></Route>
        </Routes>

      <Footer/>
     
    </div>
  );
}

export default App;
