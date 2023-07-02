import './App.css';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/Stats';

function App() {
  return (
    <div>
      <div className='px-3'>
      <Navbar/>
      </div>
      <Hero/>
      <Stats/>
      <Gallery/>
     
    </div>
  );
}

export default App;
