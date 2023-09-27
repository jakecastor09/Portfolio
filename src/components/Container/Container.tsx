import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto px-8 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-24'>
      {children}
    </div>
  );
};

export default Container;
