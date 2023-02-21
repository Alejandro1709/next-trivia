import Head from 'next/head';

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

function Layout({
  title = 'Next Trivia',
  description = 'Una simple app de trivia usando nextjs, tailwind y prisma',
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-red-200'>{children}</main>
    </>
  );
}

export default Layout;
