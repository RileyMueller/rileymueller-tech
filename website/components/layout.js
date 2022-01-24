import Head from 'next/head'
import Link from 'next/link'

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
            {/*Flex for the header-main-footer arrangement*/}
            <div className='flex flex-col min-h-screen bg-gray-800 text-gray-200'>
                <div className='heropattern-hexagons-gray-800 bg-rose-900'>
                    <div className='my-5 flex flex-grow'>
                        <div className='basis-1/2 self-center flex flex-row ml-10'>
                            <div className='px-3 py-2 text-center text-2xl font-semibold'>
                                rileymueller.tech
                            </div>
                        </div>
                        <div className='basis-1/2 self-center flex flex-row-reverse mr-10'>
                            <Link href='/'>
                                <a className='px-3 hover:px-10 duration-100 py-2 mx-4 rounded-md text-sm font-medium border-2 bg-rose-900 border-gray-800'>
                                Home
                                </a>
                            </Link>
                            <Link href='/about'>
                                <a className='px-3 hover:px-10 duration-100 py-2 mx-4 rounded-md text-sm font-medium border-2 bg-rose-900 border-gray-800'>
                                About
                            </a>
                            </Link>
                            <Link href='/projects'>
                                <a className='px-3 hover:px-10 duration-100 py-2 mx-4 rounded-md text-sm font-medium border-2 bg-rose-900 border-gray-800'>
                                Projects
                                </a>
                            </Link>
                        </div>
                    </div>                    
                </div>
                <main class='flex-grow'>{children}</main>
                <footer className='heropattern-hexagons-gray-800 bg-rose-900 h-16'>
                    {/* I want to have footer stuff here */}
                    Footer stuff
                </footer>
            </div>
        </div>
    )
}