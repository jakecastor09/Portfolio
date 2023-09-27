import myLogo from '../../assets/my-logo.png';

const Logo = () => {
  return (
    <div className='w-[222px]'>
      <img src={myLogo} alt='' className='w-10 h-10 cursor-pointer' />
    </div>
  );
};

export default Logo;
