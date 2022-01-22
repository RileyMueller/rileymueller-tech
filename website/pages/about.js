import Link from 'next/link'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

export default function About(){
    return (
        <Layout>
            <Head>
                <title>About | {siteTitle}</title>
            </Head>
            <div>About</div>
        </Layout>    
    )
}