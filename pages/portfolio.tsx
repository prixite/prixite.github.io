import React from 'react'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import { portfolioData } from '../constants/data'

import ProjectCard from '../components/ProjectCard/ProjectCard'

const portfolio = () => {
  const { title, header, heading, projects } = portfolioData
  return (
    <div className="portfolio-page">
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
  )
}

export default portfolio
