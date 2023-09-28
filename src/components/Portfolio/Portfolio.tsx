import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import spiralAdmin from '../../assets/spirals-min.png';
import spiralAdmin2 from '../../assets/spirals-2-min.png';

import Technologies from '../Technologies/Technologies';

const Portfolio = () => {
  return (
    <section id='portfolio' className='mt-12'>
      <Container>
        <PageHeader title='My Portfolio' />
        <div className='mt-16 relative p-4 w-full mx-auto bg-bgDark2 md:py-12 rounded-xl xl:mt-24'>
          <img src={spiralAdmin} alt='' className='w-full mx-auto md:hidden' />
          <img
            src={spiralAdmin2}
            alt=''
            className='w-full  mx-auto hidden md:block md:w-4/5'
          />
        </div>
        <div className='mt-8 flex flex-col md:mt-12 md:flex-row lg:items-center md:space-x-8 lg:space-x-12 xl:mt-16'>
          <div className='md:w-1/2'>
            <h1 className='text-2xl font-bold  text-primary md:text-3xl lg:text-4xl xl:text-5xl'>
              Spirals
            </h1>
            <p className='font-bold text-white mt-2 md:text-lg lg:mt-4 lg:text-xl xl:text-2xl'>
              Admin Web App and POS Mobile App
            </p>
            <p className='text-light leading-loose mt-1 lg:text-lg lg:mt-2 lg:leading-loose xl:max-w-lg xl:leading-loose xl:text-xl'>
              The full-stack project that I developed for Spiral business during
              my college years. The project consists of two separate
              applications: a mobile app for branch use and a web application
              for the owner.
            </p>
          </div>
          <div className='md:w-1/2 xl:flex xl:justify-center'>
            <Technologies />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
