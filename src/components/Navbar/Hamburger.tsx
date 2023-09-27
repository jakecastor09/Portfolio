import { useState } from 'react';
const NavbarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle = `${
    isOpen ? 'open' : ''
  } z-30 mt-1 block lg:hidden focus:outline-none hamburger`;
  return (
    <button className={menuStyle} onClick={() => setIsOpen(!isOpen)}>
      <span className='hamburger-top'></span>
      <span className='hamburger-middle'></span>
      <span className='hamburger-bottom'></span>
    </button>
  );
};

export default NavbarHamburger;
