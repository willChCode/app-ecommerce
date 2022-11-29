import Image from 'next/image'
import Link from 'next/link'
// import { ShoppingCart, Menu } from '@mui/icons-material'
import { Layout } from '../components/layouts/RootLayout'
import { NavMenu } from '../components/menu/NavMenu'

export default function Home() {
  return (
    <Layout title='Next-Home'>
      <NavMenu />

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  )
}
