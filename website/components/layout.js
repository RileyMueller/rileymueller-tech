import Head from 'next/head'

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
            <header>
                {/* I want to have a bar of links to various pages */}
                <div className='bg-gray-800'>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div class="flex space-x-4">
                                <div class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-small" aria-current="page">rileymueller.tech</div>

                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>{children}</main>
            <footer>
                {/* I want to have footer stuff here */}
                Footer stuff
            </footer>
        </div>
    )
}