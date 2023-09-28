interface Props {
  title: string;
}
const PageHeader = ({ title }: Props) => {
  return (
    <div>
      <div className='flex items-center space-x-1 relative justify-center lg:space-x-2'>
        <div className='rounded-full w-4 h-4 bg-primary lg:h-5 lg:w-5'></div>
        <div className='rounded-full w-4 h-4 bg-secondary lg:h-5 lg:w-5'></div>
        <div className='rounded-full w-4 h-4 bg-tertiary lg:h-5 lg:w-5'></div>
      </div>
      <h1 className='text-center mt-4 font-bold text-3xl text-white lg:text-4xl xl:text-5xl'>
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
