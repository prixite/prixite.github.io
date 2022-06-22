import React from 'react'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import { Box, Container, Typography, Divider, Grid } from '@mui/material'
import { jobsData } from '../constants/data'
import JobCard from '../components/JobCard/JobCard'

const jobs = () => {
  const { title, heading, jobs } = jobsData
  return (
    <div className="jobs-page">
      <Header bgImg={homePageBg} title={title}>
        <Box className="careers-container">
          <Typography
            variant="h2"
            textAlign="center"
            className="careers-heading"
          >
            {heading}
          </Typography>
        </Box>
      </Header>
      <Container maxWidth="xl">
        <Box p="5rem 1.5rem">
          <Typography variant="h4" className="jobs-heading">
            {heading}
          </Typography>

          <Divider
            variant="middle"
            className="jobs-divider"
            sx={{ mx: 'auto', fill: 'true', width: '8%' }}
          />

          <Grid container>
            {jobs.map((job, index) => {
              return (
                <JobCard
                  key={index}
                  image={job.image.src}
                  name={job.name}
                  description={job.description}
                />
              )
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default jobs
