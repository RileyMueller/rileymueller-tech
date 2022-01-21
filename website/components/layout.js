import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Riley Mueller\'s Personal Website'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
                <meta 
                    property='description'
                    content='The personal website for presenting and hosting projects by Riley Mueller'/>
                <meta
                    name='og:title' content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                {/* I want to have a bar of links to various pages */}
            </header>
            <main>{children}</main>
            <div className={styles.footer}>
                {/* I want to have footer stuff here */}
            </div>
        </div>
    )
}