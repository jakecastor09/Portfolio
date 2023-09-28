import useMenuStore from '../../hooks/MenuStore';
const NavbarHamburger = () => {
  const [isOpen, setIsOpen] = useMenuStore(s => [s.isOpen, s.setIsOpen]);
  const menuStyle = `${
    isOpen ? 'open' : ''
  } z-50 mt-1 block lg:hidden focus:outline-none hamburger`;
  return (
    <button className={menuStyle} onClick={() => setIsOpen()}>
      <span className='hamburger-top'></span>
      <span className='hamburger-middle'></span>
      <span className='hamburger-bottom'></span>
    </button>
  );
};

export default NavbarHamburger;
