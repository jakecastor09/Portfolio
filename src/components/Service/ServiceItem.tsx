interface Props {
  image: string;
  title: string;
  desc: string;
}
const ServiceItem = ({ image, title, desc }: Props) => {
  return (
    <div className='flex flex-col items-center text-center text-white'>
      <img
        src={image}
        alt=''
        className='w-14 h-14 mb-2 lg:w-16 lg:h-16 xl:w-18 xl:h-18'
      />
      <h1 className='font-bold  text-lg lg:text-lg xl:text-2xl xl:max-w-xs xl:mt-2'>
        {title}
      </h1>
      <p className='text-light max-w-xs leading-relaxed lg:mt-1 xl:leading-relaxed'>
        {desc}
      </p>
    </div>
  );
};

export default ServiceItem;
