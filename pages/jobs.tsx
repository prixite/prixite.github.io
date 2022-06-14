import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Grid,
  Button,
} from '@mui/material'
import { jobsData } from '../constants/constants'
import JobCard from '../components/JobCard/JobCard'

const jobs = () => {
  const { title, heading, jobs } = jobsData
  return (
    <div className="jobs-page">
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={homePageBg}>
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
