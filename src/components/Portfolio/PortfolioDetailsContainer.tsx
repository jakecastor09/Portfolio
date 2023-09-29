import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const PortfolioDetailsContainer = ({ children }: Props) => {
  return (
    <div className='mt-8 flex flex-col md:mt-12 md:flex-row lg:items-center md:space-x-8 lg:space-x-12 xl:mt-16'>
      {children}
    </div>
  );
};

export default PortfolioDetailsContainer;
