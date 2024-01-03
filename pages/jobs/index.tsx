import { Container, Box, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Props } from '../../types/interfaces'

// eslint-disable-next-line
import { jobsData } from '../../data/data'

export const getStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_ERP_BASEPATH}/api/resource/Job%20Opening?fields=[%22*%22]`
  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      data: data,
    },
  }
}

const Jobs = ({ data }: Props) => {
  const { jobDataNotFound, jobsPageTitle, jobsPageHeader } = jobsData
  const jobsPublish = data?.data?.filter((job) => job?.publish === 1)

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

        {jobsPublish.length > 0 ? (
          <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
            {jobsPublish?.map((curElem) => {
              return (
                <div key={curElem?.name}>
                  <Grid item sm={12} md={3} className="job">
                    <Box marginBottom="10px">
                      <Link href={`/jobs/${curElem?.name}`}>
                        <Box className="job-image-container">
                          <Image
                            width={22}
                            height={22}
                            src={'/images/jobs/breifcase.svg'}
                            alt="job-image"
                          />
                        </Box>
                        <Typography
                          className="title-description"
                          sx={{ fontSize: 15, fontWeight: 600, width: 250 }}
                          mt="16px"
                          ml="50px"
                        >
                          {curElem?.job_title}
                        </Typography>

                        <div
                          className="job-description description"
                          style={{ fontSize: '13px' }}
                          dangerouslySetInnerHTML={{
                            __html: curElem?.description,
                          }}
                        />
                      </Link>
                    </Box>
                  </Grid>
                </div>
              )
            })}
          </Grid>
        ) : (
          <h1 className="job-data-not-found">{jobDataNotFound}</h1>
        )}
      </Container>
    </>
  )
}

export default Jobs
