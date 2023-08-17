import { Container, Box, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { JobProps } from '../../types/interfaces'

// eslint-disable-next-line
import { jobsData } from '../../data/data'

export const getServerSideProps = async () => {
  const url =
    'https://stg-erp.prixite.com/api/resource/Job%20Opening?fields=[%22*%22]'

  const response = await fetch(url)

  const data = await response.json()
  return {
    props: {
      data: data,
    },
  }
}

const Jobs = ({ data }: JobProps) => {
  const { jobsPageTitle, jobsPageHeader } = jobsData
  return (
    <>
      <Head>
        <title>{jobsPageTitle}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {jobsPageHeader.slice(0, 10)}
              <span style={{ color: 'var(--primary-green)' }}>
                {jobsPageHeader.slice(10, 18)}
              </span>
              {jobsPageHeader.slice(18, 50)}
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
          {data.data.map((curElem) => {
            return (
              <div key={curElem.name}>
                <Grid item sm={12} md={3} className="job">
                  <Box marginBottom="10px">
                    <Box className="job-image-container">
                      <Link href={`/jobs/${curElem.name}`}>
                        <Typography
                          sx={{ fontSize: 15, fontWeight: 600, width: 250 }}
                          mt="40px"
                        >
                          {curElem.name}
                        </Typography>

                        <div
                          className="job-description description"
                          dangerouslySetInnerHTML={{
                            __html: curElem.description,
                          }}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </div>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Jobs
