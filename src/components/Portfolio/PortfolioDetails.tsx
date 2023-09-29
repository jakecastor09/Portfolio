interface Props {
  title: string;
  subTitle: string;
  description: string;
}
const PortfolioDetails = ({ title, subTitle, description }: Props) => {
  return (
    <div className='md:w-1/2'>
      <h1 className='text-2xl font-bold  text-primary md:text-3xl lg:text-4xl xl:text-5xl'>
        {title}
      </h1>
      <p className='font-bold text-white mt-2 md:text-lg lg:mt-4 lg:text-xl xl:text-2xl'>
        {subTitle}
      </p>
      <p className='text-light leading-loose mt-1 lg:text-lg lg:mt-2 lg:leading-loose xl:max-w-lg xl:leading-loose xl:text-xl'>
        {description}
      </p>
    </div>
  );
};

export default PortfolioDetails;
