import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TechnologiesItems = ({ children }: Props) => {
  return <div className='flex mt-4 flex-wrap gap-2'>{children}</div>;
};

export default TechnologiesItems;
