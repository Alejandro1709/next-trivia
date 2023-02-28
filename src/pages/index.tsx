import { useEffect, useState } from 'react';
import { getTrivias } from '@/services/trivia';
import Layout from '@/components/Layout';
import Options from '@/components/Options';
import { formatOptions, handleDecodeTrivia } from '@/utils/trivias';
import type ITrivia from '@/types/trivia';

export default function Home() {
  const [trivias, setTrivias] = useState<ITrivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = useState<ITrivia>();
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    getTrivias()
      .then(({ results }) => {
        const formatted = formatOptions(results);
        const decoded = handleDecodeTrivia(formatted);
        setTrivias(decoded);
        setCurrentTrivia(decoded[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentTrivia(trivias[number]);
  }, [number]);

  const handlePrevClick = () => {
    if (number === 0) return;
    setNumber((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (number >= 9) return;
    setNumber((prev) => prev + 1);
  };

  const handleOptionClick = (guess: string) => {
    if (guess === currentTrivia?.correct_answer) {
      setScore((prev) => prev + 5);
      setHighScore((prev) => (prev < score ? score : prev));
      setNumber((prev) => prev + 1);
    } else {
      if (score === 0) return;
      setScore((prev) => prev - 5);
    }
  };

  return (
    <Layout>
      <section className='flex flex-col justify-center md:max-w-screen-md md:mx-auto'>
        <div className='flex flex-row gap-4'>
          <span>High Score: {highScore}</span>
          <span>Score: {score}</span>
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <p className='p-2 md:text-lg text-sm bg-slate-100 text-center rounded-md shadow-md'>
            {currentTrivia?.question}
          </p>
          <Options
            options={currentTrivia?.options || []}
            onGuess={handleOptionClick}
          />
          <div className='flex flex-row justify-between items-center'>
            <button
              className='p-2 bg-slate-200 rounded-md hover:bg-slate-300'
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <span>{number + 1}/10</span>
            <button
              className='p-2 bg-slate-200 rounded-md hover:bg-slate-300'
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
