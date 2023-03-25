import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { newsAndBlogs } from '../../data/data'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { BlogPost } from '../../types/interfaces'
import { sortByDate } from '../../utils/sort'
import { MDContent } from '../../types/interfaces'
import { BLOGS_PATH } from '../../utils/constants'
import { getMarkdownAllData } from '../../utils/markdown'

const Blog = ({ blogs }: MDContent) => {
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

      <Container maxWidth="xl" className="posts">
        {blogs?.map((post: BlogPost, index: number) => (
          <div className="card" key={index}>
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              className="post-img"
              width={500}
              height={500}
              layout="responsive"
            />

            <div className="post-date">Posted on {post.frontmatter.date}</div>

            <h3>{post.frontmatter.title}</h3>

            <p>{post.frontmatter.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
              <Button variant="contained" className="read-button">
                Read More
              </Button>
            </Link>
          </div>
        ))}
      </Container>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  const blogFiles = fs.readdirSync(path.join(BLOGS_PATH))
  const blogs = getMarkdownAllData(blogFiles, BLOGS_PATH, fs)

  return {
    props: {
      blogs: blogs.sort(sortByDate),
    },
  }
}
