import { motion } from 'framer-motion';

interface Props {
  smImage: string;
  midImage: string;
}
const PortfolioImage = ({ smImage, midImage }: Props) => {
  return (
    <motion.div
      className='mt-16 relative overflow-hidden p-4 w-full mx-auto bg-bgDark2 md:py-12 rounded-xl xl:mt-28'
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        scale: {
          type: 'spring',
        },
      }}
    >
      <img src={smImage} alt='' className='w-full mx-auto md:hidden' />
      <img
        src={midImage}
        alt=''
        className='w-full  mx-auto hidden md:block md:w-4/5'
      />
    </motion.div>
  );
};

export default PortfolioImage;
