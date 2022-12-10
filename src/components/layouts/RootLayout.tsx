import Head from 'next/head'

interface Props {
  children: JSX.Element | JSX.Element[]
  title: string
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='E-Commerce shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
    </>
  )
}
