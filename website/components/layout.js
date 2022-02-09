import Head from 'next/head'
import Link from 'next/link'
import {SiGithub, SiTwitter} from 'react-icons/si'

export const siteTitle = 'rileymueller.tech'

export default function Layout({children, subTitle}) {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta 
                    property='description'
                    content='The personal website for presenting and hosting projects by Riley Mueller'/>
                <meta
                    name='og:title' content={siteTitle}/>
                <title>{subTitle} | {siteTitle}</title>
            </Head>
            {/* Flex for the header-main-footer arrangement */}
            <div className='flex flex-col min-h-screen bg-gray-800 text-gray-200'>
                {/* Header */}
                <div className='heropattern-hexagons-gray-800 bg-rose-900'>
                    <div className='my-5 flex flex-grow'>
                        <div className='basis-1/2 self-center flex flex-row ml-10'>
                            <div className='px-3 py-2 text-center text-2xl font-semibold bg-rose-900 rounded-lg'>
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
                {/* Body */}
                <main className='grow flex flex-col items-center'>{children}</main>
                {/* Footer */}
                <footer className=' pb-2 heropattern-hexagons-gray-800 bg-rose-900'>
                    <main className='layout flex flex-col items-center pt-6'>
                        <FooterLinks/>
                        <p className='mt-8 text-sm text-gray-300'>
                            © Riley Mueller {new Date().getFullYear()}
                        </p>
                    </main>
                </footer>
            </div>
        </div>
    )
}

function FooterLinks () {
    return (
        <div className='flex mt-2 space-x-4'>
            <div className='flex justify-center items-center'>
                <Link href='https://github.com/RileyMueller'>
                    <a>
                        <SiGithub className='my-auto w-10 h-6 text-gray-200 align-middle transition-colors hover:text-gray-50'/>
                    </a>
                </Link>
                <Link href='https://twitter.com/riley_mue'>
                    <a>
                        <SiTwitter className='my-auto w-10 h-6 text-gray-200 align-middle transition-colors hover:text-gray-50'/>
                    </a>
                </Link>                
            </div>
        </div>
    )
}