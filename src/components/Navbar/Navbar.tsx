import Email from './Email';
import Hamburger from './Hamburger';
import Links from './Links';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center px-4 py-8 '>
        <Logo />
        <Links />
        <div className='flex items-center space-x-8'>
          <Email />
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
