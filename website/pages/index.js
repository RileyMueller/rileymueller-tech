import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <div className='h1'>Here is some info</div>
      <Link href='/about'><a>####</a></Link>
    </Layout>    
  )
}
