import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <section className='flex flex-col justify-center md:max-w-screen-md md:mx-auto'>
        <div className='flex flex-col gap-4 p-4'>
          <p className='p-2 md:text-lg text-sm bg-slate-100 text-center rounded-md shadow-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            doloribus quia quidem aspernatur laudantium fugit quod autem fugiat
            asperiores perferendis.
          </p>
          <ul className='flex flex-col gap-2'>
            <li className='bg-slate-100 p-2 rounded-md border cursor-pointer'>
              Opcion 1
            </li>
            <li className='bg-slate-100 p-2 rounded-md border cursor-pointer'>
              Opcion 2
            </li>
            <li className='bg-slate-100 p-2 rounded-md border cursor-pointer'>
              Opcion 3
            </li>
            <li className='bg-slate-100 p-2 rounded-md border cursor-pointer'>
              Opcion 4
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
