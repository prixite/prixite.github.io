import React from 'react'
// eslint-disable-next-line
import Header from '../components/Shared/header/Header'
// eslint-disable-next-line
import homePageBg from '../public/images/homePageBg.png'
import { Box, Container, Typography, Divider, Grid } from '@mui/material'
import { jobsData } from '../data/data'
import JobCard from '../components/Presentational/JobCard/JobCard'
import Head from 'next/head'

const jobs = () => {
  const { title, heading, jobs } = jobsData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="jobs-page">
        <Box className="careers-container">
          <Typography
            variant="h2"
            textAlign="center"
            className="careers-heading"
          >
            {heading}
          </Typography>
        </Box>
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
    </>
  )
}

export default jobs
