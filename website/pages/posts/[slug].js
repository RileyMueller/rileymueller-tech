//Help from tutorial
//https://www.pullrequest.com/blog/build-a-blog-with-nextjs-and-markdown/

import React from 'react'
import Layout from '../../components/layout'
import matter from 'gray-matter'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'


function PostTemplate({content, data}) {
    const frontmatter = data

    return (
        <Layout subTitle={frontmatter.title}>
            <article className='prose prose-invert prose-lg p-4 m-4'>
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.date}</h3>
                <ReactMarkdown children={content}/>
            </article>
        </Layout>
    )
}


PostTemplate.getInitialProps = async (context) => {
    //the url
    const {slug} = context.query
    console.log(slug)
    //import correlated md file  
    const content = await import(`../../content/${slug}.md`)
    
    //parse md data through matter
    const data = matter(content.default)

    return {...data}
}

export default PostTemplate