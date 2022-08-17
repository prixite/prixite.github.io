import React from 'react'
// eslint-disable-next-line
import Header from '../components/Shared/header/Header'
// eslint-disable-next-line
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Grid } from '@mui/material'
import { newsAndBlogs } from '../data/data'
import Head from 'next/head'
import Blog from '../components/Presentational/Blog/Blog'

const blog = () => {
  const { title, header, blogs } = newsAndBlogs
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
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {blogs.map((blog, index) => {
            return (
              <Grid item md={6} lg={6} key={index}>
                <Blog
                  key={index}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  chipLabel={blog.chipLabel}
                  readTime={blog.readTime}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default blog
