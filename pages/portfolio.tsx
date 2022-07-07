import React from 'react'
import Header from '../components/Shared/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import { portfolioData } from '../data/data'
import ProjectCard from '../components/Presentational/ProjectCard/ProjectCard'
import Head from 'next/head'

const portfolio = () => {
  const { title, header, heading, projects } = portfolioData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="portfolio-page">
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
            <Typography variant="h4" className="portfolio-heading">
              {heading}
            </Typography>

            <Divider
              variant="middle"
              className="portfolio-divider"
              sx={{ mx: 'auto', fill: 'true', width: '8%' }}
            />

            <Grid container>
              {projects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image.src}
                    name={project.name}
                    description={project.description}
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

export default portfolio
