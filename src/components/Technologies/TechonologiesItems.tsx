import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TechonologiesItems = ({ children }: Props) => {
  return <div className='flex mt-4 flex-wrap gap-2'>{children}</div>;
};

export default TechonologiesItems;
