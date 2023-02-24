import he from 'he';
import { shuffle } from './array';
import type ITrivia from '@/types/trivia';

const handleDecodeTrivia = (trivias: ITrivia[]) => {
  return trivias.map((trivia) => ({
    ...trivia,
    question: he.decode(trivia.question),
  }));
};

const formatOptions = (array: ITrivia[]) => {
  let summed: string[] = [];

  array.forEach((opt) => {
    summed = shuffle([...opt.incorrect_answers, opt.correct_answer]);
    opt.options = summed;
  });

  return array;
};

export { handleDecodeTrivia, formatOptions };
