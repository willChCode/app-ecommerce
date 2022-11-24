import Head from 'next/head'

export const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="E-Commerce shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{ children }</main>

    </>
  )
}
