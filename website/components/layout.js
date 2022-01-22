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
            <body class='flex flex-col min-h-screen'>
                <header className={styles.background}>
                    {/* I want to have a bar of links to various pages */}
                    <div>
                        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                            <div className='relative flex items-center justify-between h-16'>
                                <div class="flex space-x-4">
                                    <div class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-small" aria-current="page">rileymueller.tech</div>
                                    <Link href="/">
                                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Home
                                        </a>
                                    </Link>
                                    <Link href="/about">
                                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            About
                                        </a>
                                    </Link>
                                    <Link href="/projects">
                                        <a class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Projects
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main class='flex-grow'>{children}</main>
                <footer className={styles.background}>
                    {/* I want to have footer stuff here */}
                    Footer stuff
                </footer>
            </body>
        </div>
    )
}