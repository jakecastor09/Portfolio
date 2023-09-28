import useMenuStore from '../../hooks/MenuStore';
import Container from '../Container/Container';

const MobileMenu = () => {
  const setIsOpen = useMenuStore(s => s.setIsOpen);
  return (
    <div className='absolute inset-0 bg-white z-40'>
      <Container>
        <div className='flex fixed flex-col mt-20 text-2xl space-y-6'>
          <a
            href='#home'
            className='hover:text-primary duration-200 outline-none'
            onClick={() => setIsOpen()}
          >
            Home
          </a>
          <a
            href='#portfolio'
            className='hover:text-primary duration-200 outline-none'
            onClick={() => setIsOpen()}
          >
            Portfolio
          </a>
          <a
            href='#service'
            className='hover:text-primary duration-200 outline-none'
            onClick={() => setIsOpen()}
          >
            Service
          </a>
          <a
            href='#client'
            className='hover:text-primary duration-200 outline-none'
            onClick={() => setIsOpen()}
          >
            Client
          </a>
          <a
            href='#about'
            className='hover:text-primary duration-200 outline-none'
            onClick={() => setIsOpen()}
          >
            About
          </a>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
