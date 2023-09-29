import { AiOutlineArrowRight } from 'react-icons/ai';
import profile2 from '../../assets/jake-profile.png';
import profile from '../../assets/profile.png';
import Container from '../Container/Container';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home'>
      <Container>
        <div className='flex flex-col justify-center md:flex-row-reverse md:items-center md:gap-4'>
          <div className='md:w-1/2 relative w-full'>
            <div className='hidden md:block w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-secondary rounded-full absolute md:top-0 md:left-0 filter blur-3xl  opacity-30'></div>
            <div className='hidden md:block w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-primary rounded-full absolute md:bottom-0 md:right-0 filter blur-3xl opacity-30'></div>

            <div className='md:hidden bottom-8 right-28 w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-secondary rounded-full absolute filter blur-3xl  opacity-30'></div>
            <div className='md:hidden top-24 left-28 w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-primary rounded-full absolute filter blur-3xl opacity-30'></div>
            <motion.img
              src={profile}
              alt='jake'
              className='max-w-[288px] mx-auto md:hidden relative z-10'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            />
            <motion.img
              src={profile2}
              alt='jake'
              className='lg:max-w-[348px]  xl:max-w-[440px] relative z-10 mx-auto  hidden md:block'
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1],
                scale: {
                  type: 'spring',
                  damping: 6,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1],
              scale: {
                type: 'spring',
                damping: 6,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className='text-center mt-4 md:text-left md:w-1/2'
          >
            <h1 className='text-white text-lg font-semibold leading lg:text-xl xl:text-2xl'>
              👋🏻 Hi! I'm Jake Castor
            </h1>
            <h1 className='text-5xl font-bold text-white mt-2 md:text-4xl lg:text-5xl xl:text-6xl xl:mt-4'>
              <span className='text-primary'>Frontend</span> Developer
            </h1>
            <p className='text-light mt-4 leading-loose max-w-md mx-auto md:mx-0 lg:max-w-md lg:text-xl lg:leading-loose xl:text-2xl xl:leading-loose'>
              I am a dedicated front-end developer with a focus on building
              responsive websites, possessing a strong grasp of the latest
              technologies.
            </p>
            <button className='flex mx-auto items-center bg-secondary duration-200 shadow-lg md:mx-0 py-2 px-8 text-white rounded-full mt-4 hover:-translate-y-1 hover:shadow-xl xl:mt-8 xl:text-lg xl:py-3 xl:px-12'>
              Let's Talk{' '}
              <span className='ml-2'>
                <AiOutlineArrowRight />
              </span>
            </button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
