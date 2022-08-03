import React from 'react'
// eslint-disable-next-line
import Header from '../components/Shared/header/Header'
// eslint-disable-next-line
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import { blogData } from '../data/data'
import BlogCard from '../components/Presentational/BlogCard/BlogCard'
import Head from 'next/head'

const blog = () => {
  const { title, header, heading, blogs } = blogData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog-page">
        <Box className="careers-container">
          <Typography
            variant="h2"
            textAlign="center"
            className="careers-heading"
          >
            {header}
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Box p="5rem 1.5rem">
            <Typography variant="h4" className="blog-heading">
              {heading}
            </Typography>

            <Divider
              variant="middle"
              className="blog-divider"
              sx={{ mx: 'auto', fill: 'true', width: '8%' }}
            />

            <Grid container>
              {blogs.map((blog, index) => {
                return (
                  <BlogCard
                    key={index}
                    image={blog.image.src}
                    name={blog.name}
                    description={blog.description}
                  />
                )
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default blog
