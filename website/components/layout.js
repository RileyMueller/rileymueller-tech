import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = 'rileymueller.tech'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta 
                    property='description'
                    content='The personal website for presenting and hosting projects by Riley Mueller'/>
                <meta
                    name='og:title' content={siteTitle}/>
            </Head>
            <div className='flex flex-col min-h-screen'>
                <div className='heropattern-hexagons-stone-500 bg-rose-900 text-white'>
                    rileymueller.tech
                    <Link href='/'><a className='px-3 py-2 rounded-md text-sm font-medium hover:text-zinc-400 hover:bg-rose-900'>
                        Home
                    </a></Link>
                    <Link href='/about'><a className='px-3 py-2 rounded-md text-sm font-medium hover:text-zinc-400 hover:bg-rose-900'>
                        About
                    </a></Link>
                    <Link href='/projects'><a className='px-3 py-2 rounded-md text-sm font-medium hover:text-zinc-400 hover:bg-rose-900'>
                        Projects
                    </a></Link>
                </div>
                <main class='flex-grow'>{children}</main>
                <footer className='heropattern-hexagons-orange-800 bg-red-50 h-16'>
                    {/* I want to have footer stuff here */}
                    Footer stuff
                </footer>
            </div>
        </div>
    )
}