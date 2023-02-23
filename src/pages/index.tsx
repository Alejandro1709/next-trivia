import { useEffect, useState } from 'react';
import { getTrivias } from '@/services/trivia';
import he from 'he';
import Layout from '@/components/Layout';
import Options from '@/components/Options';
import type ITrivia from '@/types/trivia';

const handleDecodeTrivia = (trivias: ITrivia[]) => {
  return trivias.map((trivia) => ({
    ...trivia,
    question: he.decode(trivia.question),
  }));
};

const shuffle = (array: any[]) => {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

const formatOptions = (array: ITrivia[]) => {
  let summed: string[] = [];

  array.forEach((opt) => {
    summed = shuffle([...opt.incorrect_answers, opt.correct_answer]);
    opt.options = summed;
  });

  return array;
};

export default function Home() {
  const [trivias, setTrivias] = useState<ITrivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = useState<ITrivia>();
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    getTrivias()
      .then(({ results }) => {
        setTrivias(handleDecodeTrivia(results));
        setCurrentTrivia(results[0]);
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

  console.log(currentTrivia?.options);
  return (
    <Layout>
      <section className='flex flex-col justify-center md:max-w-screen-md md:mx-auto'>
        <div className='flex flex-col gap-4 p-4'>
          <p className='p-2 md:text-lg text-sm bg-slate-100 text-center rounded-md shadow-md'>
            {currentTrivia?.question}
          </p>
          <Options options={currentTrivia?.options || []} />
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
