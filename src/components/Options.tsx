import { useId } from 'react';
import Option from './Option';

type OptionsProps = {
  options: string[];
};
function Options({ options }: OptionsProps) {
  const randId = useId();

  return (
    <ul className='flex flex-col gap-2'>
      {options.map((opt) => (
        <Option key={`${randId}-${opt}`} option={opt} />
      ))}
    </ul>
  );
}

export default Options;
