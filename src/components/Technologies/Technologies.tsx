import TechnologiesItem from './TechnologiesItem';
import TechnologiesTitle from './TechnologiesTitle';
import TechonologiesItems from './TechonologiesItems';

const Technologies = () => {
  return (
    <div className='mt-4 h-fit  bg-trasparent border border-white rounded-xl p-4 md:mt-0 xl:w-fit xl:p-6'>
      <div className='flex items-center space-x-1  lg:space-x-2'>
        <div className='rounded-full w-2 h-2 bg-primary lg:h-3 lg:w-3'></div>
        <div className='rounded-full w-2 h-2 bg-secondary lg:h-3 lg:w-3'></div>
        <div className='rounded-full w-2 h-2 bg-tertiary lg:h-3 lg:w-3'></div>
        <h1 className='text-white text-xs lg:text-md'>- Technologies I used</h1>
      </div>
      <TechnologiesTitle title='Spirals Web App' />
      <TechonologiesItems>
        <TechnologiesItem name='React' />
        <TechnologiesItem name='Typescript' />
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
