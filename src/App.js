import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Homegallery from './components/Homegallery';
import { Homereferences } from './components/Homereferences';
import Navbar from './components/Navbar';
import Ourwork from './components/Ourwork';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <div className='px-3'>
      <Navbar/>
      </div>
      <Hero/>
      <Ourwork/>
      <Homegallery/>
      <Homereferences/>
      <Testimonials/>
      <Footer/>
     
    </div>
  );
}

export default App;
