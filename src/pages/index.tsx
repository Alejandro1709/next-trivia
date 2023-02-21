import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-3xl mb-2 text-center'>Next Trivia</h1>
        <div className='flex flex-col gap-2 '>
          <p className='p-2 bg-slate-200 text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            doloribus quia quidem aspernatur laudantium fugit quod autem fugiat
            asperiores perferendis.
          </p>
          <ul className='flex flex-col gap-2'>
            <li className='bg-slate-200 p-2'>Opcion 1</li>
            <li className='bg-slate-200 p-2'>Opcion 2</li>
            <li className='bg-slate-200 p-2'>Opcion 3</li>
            <li className='bg-slate-200 p-2'>Opcion 4</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
