type OptionProps = {
  option: string;
  onGuess: (guess: string) => void;
};

function Option({ option, onGuess }: OptionProps) {
  return (
    <li
      className='bg-slate-100 p-2 rounded-md border cursor-pointer hover:bg-gray-300'
      onClick={() => onGuess(option)}
    >
      {option}
    </li>
  );
}

export default Option;
