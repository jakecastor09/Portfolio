interface Props {
  smImage: string;
  midImage: string;
}
const PortfolioImage = ({ smImage, midImage }: Props) => {
  return (
    <div className='mt-16 relative p-4 w-full mx-auto bg-bgDark2 md:py-12 rounded-xl xl:mt-24'>
      <img src={smImage} alt='' className='w-full mx-auto md:hidden' />
      <img
        src={midImage}
        alt=''
        className='w-full  mx-auto hidden md:block md:w-4/5'
      />
    </div>
  );
};

export default PortfolioImage;
