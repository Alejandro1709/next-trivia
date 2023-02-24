import { useId } from 'react';
import Option from './Option';

type OptionsProps = {
  options: string[];
  onGuess: (guess: string) => void;
};
function Options({ options, onGuess }: OptionsProps) {
  const randId = useId();

  return (
    <ul className='flex flex-col gap-2'>
      {options.map((opt) => (
        <Option key={`${randId}-${opt}`} option={opt} onGuess={onGuess} />
      ))}
    </ul>
  );
}

export default Options;
