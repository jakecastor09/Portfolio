import TechnologiesItem from './TechnologiesItem';
import TechnologiesTitle from './TechnologiesTitle';
import TechonologiesItems from './TechonologiesItems';

const Technologies = () => {
  return (
    <div className='md:w-1/2 mt-4 bg-trasparent border border-white rounded-xl p-4'>
      <div className='flex items-center space-x-1  lg:space-x-2'>
        <div className='rounded-full w-2 h-2 bg-primary lg:h-5 lg:w-5'></div>
        <div className='rounded-full w-2 h-2 bg-secondary lg:h-5 lg:w-5'></div>
        <div className='rounded-full w-2 h-2 bg-tertiary lg:h-5 lg:w-5'></div>
        <h1 className='text-white text-xs'>- Technologies I used</h1>
      </div>
      <TechnologiesTitle title='Spirals Web App' />
      <TechonologiesItems>
        <TechnologiesItem name='React' />
        <TechnologiesItem name='Typescript' />
        <TechnologiesItem name='Ionic' />
        <TechnologiesItem name='Chackra UI' />
        <TechnologiesItem name='Firebase' />
      </TechonologiesItems>
      <TechnologiesTitle title='Spirals Mobile App' />
      <TechonologiesItems>
        <TechnologiesItem name='HTML' />
        <TechnologiesItem name='CSS' />
        <TechnologiesItem name='Ionic' />
        <TechnologiesItem name='Angular' />
        <TechnologiesItem name='Firebase' />
      </TechonologiesItems>
    </div>
  );
};

export default Technologies;
