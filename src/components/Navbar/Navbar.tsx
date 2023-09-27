import Email from './Email';
import Hamburger from './Hamburger';
import Links from './Links';
import Logo from './Logo';
const Navbar = () => {
  return (
    <nav>
      <div className='flex container mx-auto justify-between items-center px-4 pt-8  md:px-8 lg:px-12 xl:px-24'>
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
