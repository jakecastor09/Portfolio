interface Props {
  title: string;
}
const TechnologiesTitle = ({ title }: Props) => {
  return (
    <div className='bg-yellow mt-4 inline-block text-xs font-bold text-darkYellow rounded-full px-2 py-1 '>
      {title}
    </div>
  );
};

export default TechnologiesTitle;
