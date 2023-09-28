import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';
import useMenuStore from './hooks/MenuStore';

const App = () => {
  const isOpen = useMenuStore(s => s.isOpen);
  return (
    <div className='relative'>
      {isOpen && <MobileMenu />}
      <Navbar />
      <Hero />
      <Portfolio />
      <Service />
      <About />
      <Footer />
    </div>
  );
};

export default App;
