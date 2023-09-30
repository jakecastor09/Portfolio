import TechnologiesItem from '../Technologies/TechnologiesItem';
import TechnologiesItems from '../Technologies/TechnologiesItems';
import { motion } from 'framer-motion';

const AboutContent = () => {
  return (
    <motion.div
      className='md:w-1/2'
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        x: { duration: 0.4 },
      }}
    >
      <h1 className='font-bold text-2xl mt-4 md:m-0 md:text-3xl lg:text-5xl'>
        Hey, <span className='text-primary'>I'm Jake</span>
      </h1>
      <p className='leading-relaxed mt-4 max-w-sm mx-auto md:max-w-md md:leading-relaxed md:m-0 md:mt-2 md:text-base lg:text-lg lg:leading-loose lg:mt-4'>
        A recent Bachelor of Science in Information Technology graduate with a
        specialization in Database from Nueva Ecija University Science and
        Technology with a strong understanding of front-end development and a
        foundational knowledge of backend technologies. Seeking an entry level
        Front End Developer role to apply my skills and gain hands-on experience
        in a professional setting.
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
    </motion.div>
  );
};

export default AboutContent;
