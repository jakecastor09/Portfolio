import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Service from './components/Service/Service';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Service />
      <About />
      <Footer />
    </>
  );
};

export default App;
