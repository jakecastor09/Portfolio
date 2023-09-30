import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const HeroContainer = ({ children }: Props) => {
  return (
    <div className='flex flex-col justify-center md:flex-row-reverse md:items-center md:gap-4'>
      {children}
    </div>
  );
};

export default HeroContainer;
