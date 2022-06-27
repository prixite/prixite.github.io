import React from 'react'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import { blogData } from '../data/data'
import BlogCard from '../components/BlogCard/BlogCard'

const blog = () => {
  const { title, header, heading, blogs } = blogData
  return (
    <div className="blog-page">
      <Header bgImg={homePageBg} title={title}>
        <Box className="careers-container">
          <Typography
            variant="h2"
            textAlign="center"
            className="careers-heading"
          >
            {header}
          </Typography>
        </Box>
      </Header>
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
  )
}

export default blog
