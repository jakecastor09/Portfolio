import { motion } from 'framer-motion';

interface Props {
  smImage: string;
  midImage: string;
}
const PortfolioImage = ({ smImage, midImage }: Props) => {
  return (
    <div className='mt-16 relative overflow-hidden p-4 w-full mx-auto bg-bgDark2 md:py-12 rounded-xl xl:mt-24'>
      <img src={smImage} alt='' className='w-full mx-auto md:hidden' />
      <motion.img
        src={midImage}
        alt=''
        className='w-full  mx-auto hidden md:block md:w-4/5'
        initial={{ opacity: 0, y: 400 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          y: { duration: 0.8 },
        }}
      />
    </div>
  );
};

export default PortfolioImage;
