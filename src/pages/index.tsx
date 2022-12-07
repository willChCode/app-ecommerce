import Image from 'next/image'
import { Layout } from '../components/layouts/RootLayout'
import { NavMenu } from '../components/menu/NavMenu'
import * as img from '@assets';

export default function Home() {
  return (
    <Layout title='Next-Home'>
      <NavMenu />
      <Image src={img.banner1} alt='img1' style={{ width: '100%' }} />
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
