type OptionProps = {
  option: string;
};

function Option({ option }: OptionProps) {
  return (
    <li className='bg-slate-100 p-2 rounded-md border cursor-pointer'>
      {option}
    </li>
  );
}

export default Option;
