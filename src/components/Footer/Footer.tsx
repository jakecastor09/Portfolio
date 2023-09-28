import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='flex flex-col items-center mt-16 xl:mt-24 md:pt-16 lg:pt-20 xl:pt-24'>
          {/* <p className='text-light'>Contact Me</p> */}
          <PageHeader title={'Contact Me'} />
          <h1 className='mt-8 text-light text-2xl font-bold md:text-3xl lg:mt-12 lg:text-4xl xl:text-5xl'>
            jakecastor1010@gmail.com
          </h1>

          <div className='mt-16 border border-bottom bg-light w-full'></div>
          <p className='mt-8 text-white'>
            &copy; 2023 Developed by Jake Castor
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
