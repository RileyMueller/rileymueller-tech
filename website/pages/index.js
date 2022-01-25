import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Link from 'next/link'
import Card from '../components/card'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      {/* The cards div */}
      <div className='bg-gray-700 w-full flex flex-col items-center'>
        <div>
          What I am Working On
        </div>
        <div className='flex flex-row space-x-4'>
          <Card content={'English 415 Research Project'} title={'English 415 Research Project'} link='/about'/>
          <Card content={'English 415 Research Project'} title={'English 415 Research Project'} link='/about'/>
        </div>
        <div className='h-10'>

        </div>
      </div>      
    </Layout>    
  )
}
