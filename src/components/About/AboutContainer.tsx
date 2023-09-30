import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const AboutContainer = ({ children }: Props) => {
  return (
    <div className='flex flex-col text-white  text-center md:flex-row md:text-left md:items-center'>
      {children}
    </div>
  );
};

export default AboutContainer;
