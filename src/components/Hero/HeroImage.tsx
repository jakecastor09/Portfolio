import profile2 from '../../assets/jake-profile.png';
import profile from '../../assets/profile.png';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <div className='md:w-1/2 relative w-full'>
      <div className='hidden md:block w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-secondary rounded-full absolute md:top-0 md:left-0 filter blur-3xl  opacity-30'></div>
      <div className='hidden md:block w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-primary rounded-full absolute md:bottom-0 md:right-0 filter blur-3xl opacity-30'></div>

      <div className='md:hidden bottom-8 right-28 w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-secondary rounded-full absolute filter blur-3xl  opacity-30'></div>
      <div className='md:hidden top-24 left-28 w-[100px] h-[100px] md:w-[300px] md:h-[300px] bg-primary rounded-full absolute filter blur-3xl opacity-30'></div>
      <motion.img
        src={profile}
        alt='jake'
        className='max-w-[288px] mx-auto md:hidden relative z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          scale: {
            type: 'spring',
          },
        }}
      />
      <motion.img
        src={profile2}
        alt='jake'
        className='lg:max-w-[348px]  xl:max-w-[440px] relative z-10 mx-auto  hidden md:block'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          scale: {
            type: 'spring',
          },
        }}
      />
    </div>
  );
};

export default HeroImage;
