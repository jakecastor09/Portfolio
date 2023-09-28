const NavbarLinks = () => {
  return (
    <div className='hidden justify-center items-center text-white lg:flex lg:space-x-8  xl:space-x-12'>
      <a href='#' className='hover:text-primary duration-200 outline-none'>
        Home
      </a>
      <a href='#' className='hover:text-primary duration-200 outline-none'>
        Portfolio
      </a>
      <a href='#' className='hover:text-primary duration-200 outline-none'>
        Service
      </a>
      <a href='#' className='hover:text-primary duration-200 outline-none'>
        Client
      </a>
      <a href='#' className='hover:text-primary duration-200 outline-none'>
        About
      </a>
    </div>
  );
};

export default NavbarLinks;
