interface Props {
  name: string;
}

const TechnologiesItem = ({ name }: Props) => {
  return (
    <div className='rounded-md shadow-md bg-bgDark px-3 font-bold py-2 text-white text-xs'>
      {name}
    </div>
  );
};

export default TechnologiesItem;
