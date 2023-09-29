import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ServiceItems = ({ children }: Props) => {
  return (
    <motion.div
      className='grid grid-cols-1 mt-16 space-y-8 gap-4 lg:gap-8 md:grid-cols-3 md:space-y-0 xl:mt-24 md:py-16 lg:py-20 xl:py-24'
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        scale: {
          type: 'spring',
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ServiceItems;
