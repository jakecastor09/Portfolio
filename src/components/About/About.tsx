import Container from '../Container/Container';
import PageHeader from '../PageHeader/PageHeader';
import profile1 from '../../assets/profile-1-min.png';
import profile2 from '../../assets/profile-2-min.png';
import TechnologiesItem from '../Technologies/TechnologiesItem';
import TechnologiesItems from '../Technologies/TechnologiesItems';

const About = () => {
  return (
    <section id='about' className='mt-12'>
      <Container>
        <PageHeader title={'About Me'} />
        <div className='mt-16 xl:mt-24 md:py-16 lg:py-20 xl:py-24'>
          <div className='flex flex-col text-white  text-center md:flex-row md:text-left md:items-center'>
            <div className='md:w-1/2 '>
              <img src={profile1} alt='' className='mx-auto md:hidden' />
              <img
                src={profile2}
                alt=''
                className=' hidden md:block w-[250px] lg:w-[320px] mx-auto'
              />
            </div>
            <div className='md:w-1/2'>
              <h1 className='font-bold text-2xl mt-4 md:m-0 md:text-3xl lg:text-5xl'>
                Hey, <span className='text-primary'>I'm Jake</span>
              </h1>
              <p className='leading-relaxed mt-4 max-w-sm mx-auto md:max-w-md md:leading-relaxed md:m-0 md:mt-2 md:text-base lg:text-lg lg:leading-loose lg:mt-4'>
                A recent Bachelor of Science in Information Technology graduate
                with a specialization in Database from Nueva Ecija University
                Science and Technology with a strong understanding of front-end
                development and a foundational knowledge of backend
                technologies. Seeking an entry level Front End Developer role to
                apply my skills and gain hands-on experience in a professional
                setting.
              </p>
              <div className='max-w-sm mx-auto md:m-0'>
                <TechnologiesItems>
                  <TechnologiesItem name='HTML' />
                  <TechnologiesItem name='CSS' />
                  <TechnologiesItem name='Javascript' />
                  <TechnologiesItem name='Typescript' />
                  <TechnologiesItem name='Tailwind' />
                  <TechnologiesItem name='React' />
                </TechnologiesItems>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
