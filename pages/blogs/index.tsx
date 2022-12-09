import React, { useEffect } from 'react'
// eslint-disable-next-line
import Header from '../../components/Shared/header/Header'
// eslint-disable-next-line
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Button } from '@mui/material'
import { newsAndBlogs } from '../../data/data'
import Head from 'next/head'
import Blog from '../../components/Presentational/Blog/Blog'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const blog = ({posts}: any) => {
  const { title, header } = newsAndBlogs

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {header.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(6, 15)}
              </span>
            </Typography>
          </Box>
          <Link href={'/'}>
          <Typography color={'primary'}> {'< '}Back </Typography>
          </Link>
          
        </Box>
      </Container>

      <Container maxWidth="xl" className='posts'>

        
        {posts?.map((post: any, index: number) => (
           <div className='card' key={index}>
           <img src={post.frontmatter.cover_image} alt='' className='post-img'/>
     
           <div className='post-date'>Posted on {post.frontmatter.date}</div>
     
           <h3>{post.frontmatter.title}</h3>
     
           <p>{post.frontmatter.excerpt}</p>
     
           <Link href={`/blog/${post.slug}`}>
           <Button
    
        variant="contained"

        className="read-button"
      
      >
        Read More
      </Button>
           </Link>
         </div>
        ))}
      
       
     
      </Container>
    </>
  )
}

export default blog

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts
    },
  }
}
