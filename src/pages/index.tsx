import Layout from '@/components/Layout';
import Options from '@/components/Options';
import type ITrivia from '@/types/trivia';

const trivia: ITrivia = {
  category: 'Entertainment: Books',
  type: 'multiple',
  difficulty: 'easy',
  question:
    'Under what pseudonym did Stephen King publish five novels between 1977 and 1984?',
  correct_answer: 'Richard Bachman',
  incorrect_answers: ['J. D. Robb', 'Mark Twain', 'Lewis Carroll'],
};

export default function Home() {
  const options = [...trivia.incorrect_answers, trivia.correct_answer];

  return (
    <Layout>
      <section className='flex flex-col justify-center md:max-w-screen-md md:mx-auto'>
        <div className='flex flex-col gap-4 p-4'>
          <p className='p-2 md:text-lg text-sm bg-slate-100 text-center rounded-md shadow-md'>
            {trivia.question}
          </p>
          <Options options={options} />
        </div>
      </section>
    </Layout>
  );
}
