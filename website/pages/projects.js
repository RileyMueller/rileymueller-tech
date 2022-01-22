import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function Projects(){
    return (
        <Layout>
            <Head>
                <title>Projects | {siteTitle}</title>
            </Head>
            <div className='flex h-1 self-center'>Projects</div>
        </Layout>    
      )
}