import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai';
const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        scale: {
          type: 'spring',
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
        I am a dedicated front-end developer with a focus on building responsive
        websites, possessing a strong grasp of the latest technologies.
      </p>
      <button className='flex mx-auto items-center bg-secondary duration-200 shadow-lg md:mx-0 py-2 px-8 text-white rounded-full mt-4 hover:-translate-y-1 hover:shadow-xl xl:mt-8 xl:text-lg xl:py-3 xl:px-12'>
        Let's Talk{' '}
        <span className='ml-2'>
          <AiOutlineArrowRight />
        </span>
      </button>
    </motion.div>
  );
};

export default HeroContent;
