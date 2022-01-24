import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <div className='bg-orange-600'>
        <ul className='flex flex-row-reverse space-x-4'> 
        {/* Want my- adjustments on the items and h- on the container */}
          <li className='basis-1/4 bg-cyan-300 text-gray-800 text-center my-5'>
            apple
          </li>
          <li className='basis-1/4 bg-cyan-500 text-gray-800 text-center my-5'>
            banna
          </li>
          <li className='basis-1/4 bg-cyan-700 text-gray-800 text-center my-5'>
            cantelope
          </li>
        </ul>
      </div>
      <Link href='/about'><a>####</a></Link>
    </Layout>    
  )
}
