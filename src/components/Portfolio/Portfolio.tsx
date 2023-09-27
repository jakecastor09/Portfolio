import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import spiralAdmin from '../../assets/spirals-admin-min.png';
import mobile from '../../assets/mobile.png';
import Technologies from '../Technologies/Technologies';

const Portfolio = () => {
  return (
    <section id='portfolio' className='mt-12'>
      <Container>
        <PageHeader title='My Portfolio' />
        <div className='mt-16 relative w-full mx-auto'>
          <img src={spiralAdmin} alt='' className='w-full xl:w-2/3 mx-auto' />
          <img
            src={mobile}
            alt=''
            className='absolute bottom-0 right-24 w-1/4'
          />
        </div>
        <div className='mt-8 flex flex-col md:mt-12 md:flex-row md:space-x-8'>
          <div className='md:w-1/2'>
            <h1 className='text-2xl font-bold  text-primary md:text-3xl lg:text-4xl'>
              Spirals
            </h1>
            <h3 className='font-bold text-white mt-2 md:text-lg lg:text-xl'>
              Admin Web App and POS Mobile App
            </h3>
            <p className='text-light leading-loose mt-1 lg:text-lg'>
              The full-stack project that I developed for Spiral business during
              my college years. The project consists of two separate
              applications: a mobile app for branch use and a web application
              for the owner.
            </p>
          </div>
          <Technologies />
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
