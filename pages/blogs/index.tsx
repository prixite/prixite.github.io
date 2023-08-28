import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { newsAndBlogs } from '../../data/data'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { MDContent } from '../../types/interfaces'
import { data } from '../../data/blogdata'
import axios from 'axios'

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
        {data?.map((post, index: number) => {
          return (
            <>
              <div className="card" key={index}>
                <Image
                  src={post.meta_image}
                  alt=""
                  className="post-img"
                  width={500}
                  height={500}
                  layout="responsive"
                />

                <div className="post-date">Posted on {post.published_on}</div>

                <h3>{post.meta_title}</h3>

                <p>{post.meta_description}</p>

                <Link href={`blog/${post.name}`}>
                  <Button variant="contained" className="read-button">
                    Read More
                  </Button>
                </Link>
              </div>
            </>
          )
        })}
      </Container>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  try {
    const response = await axios.get(
      'https://stg-erp.prixite.com/api/resource/Blog%20Post'
    )
    const blogs = response.data
    console.log(blogs)

    return {
      props: {
        blogs: blogs,
      },
    }
  } catch (error) {
    console.error('Error fetching blog data:', error.message)
    return {
      props: {
        blogs: [],
      },
    }
  }
}
