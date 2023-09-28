import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ServiceItems = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-1 mt-16 space-y-8 gap-4 lg:gap-8 md:grid-cols-3 md:space-y-0 xl:mt-24'>
      {children}
    </div>
  );
};

export default ServiceItems;
