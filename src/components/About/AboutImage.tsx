import profile1 from '../../assets/profile-1-min.png';
import profile2 from '../../assets/profile-2-min.png';
import { motion } from 'framer-motion';
const AboutImage = () => {
  return (
    <motion.div
      className='md:w-1/2 '
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        x: { duration: 0.4 },
      }}
    >
      <img src={profile1} alt='' className='mx-auto md:hidden' />
      <img
        src={profile2}
        alt=''
        className=' hidden md:block w-[250px] lg:w-[320px] mx-auto'
      />
    </motion.div>
  );
};

export default AboutImage;
