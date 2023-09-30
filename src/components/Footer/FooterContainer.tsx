import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const FooterContainer = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center mt-16 xl:mt-24 md:pt-16 lg:pt-20 xl:pt-24'>
      {children}
    </div>
  );
};

export default FooterContainer;
