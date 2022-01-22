import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <div className='h1'>Here is some info</div>
    </Layout>    
  )
}
