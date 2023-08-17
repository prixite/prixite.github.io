import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import ApplyNowBtn from '../../components/Smart/ApplyNowBtn/ApplyNowBtn'
import { jobsData } from '../../data/data'
import { JobProps } from '../../types/interfaces'
import Image from 'next/image'

export const getServerSideProps = async (context: JobProps) => {
  const name = context.params?.jobDetail
  const url = `https://stg-erp.prixite.com/api/resource/Job%20Opening?fields=["*"]&filters=[["Job%20Opening","name","=","${name}"]]`
  const res = await fetch(url)
  const result = await res.json()

  return {
    props: {
      result,
    },
  }
}

const JobDetail = ({ result }) => {
  const { jobResponsibility, jobPageHeader, aboutRole } = jobsData
  return (
    <>
      <Head>
        <title>{'title'}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {result?.data[0].job_title} 🚀
            </Typography>
            <Typography className="heading-text">
              {jobPageHeader.slice(0, 11)}
              <span style={{ color: 'var(--primary-green)' }}>
                {jobPageHeader.slice(11, 18)}
              </span>
              {jobPageHeader.slice(18, 50)}
            </Typography>
          </Box>
          <Box>
            <ApplyNowBtn text="Apply Now" />
          </Box>
        </Box>
        <Box className="page-content">
          <Container disableGutters maxWidth="xl">
            <div className="post-body">
              <Container className="circle-container" maxWidth="xl">
                <Box className="circle-image">
                  <Image
                    width={80}
                    height={80}
                    src={'/images/jobs/circle.png'}
                    alt="service-image"
                  />
                </Box>
                <Box className="circle-card">
                  <Typography className=" job-title">
                    {aboutRole.slice(0, 0)}
                    <span style={{ color: 'var(--primary-green)' }}>
                      {aboutRole.slice(0, 9)}
                    </span>
                    {aboutRole.slice(9, 15)}
                  </Typography>
                </Box>
              </Container>
                <div className="heading-text"
                  dangerouslySetInnerHTML={{
                    __html: result?.data[0].description,
                  }}
                />

              <Box className="job-container">
                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/currency.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">Currency</Typography>
                    <Typography className="job-text">
                      {result?.data[0].currency}
                    </Typography>
                  </Box>
                </Box>

                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/status.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">Status</Typography>
                    <Typography className="job-text">
                      {result?.data[0].status}
                    </Typography>
                  </Box>
                </Box>

                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/company.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">Company</Typography>
                    <Typography className="job-text">
                      {result?.data[0].company}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="job-container">
                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/designation.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">
                      Designation
                    </Typography>
                    <Typography className="job-text">
                      {result?.data[0].designation}
                    </Typography>
                  </Box>
                </Box>

                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/vacancy.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">Vacancy</Typography>
                    <Typography className="job-text">
                      {result?.data[0].vacancies}
                    </Typography>
                  </Box>
                </Box>

                <Box className="job-role-container">
                  <Box className="job-image-container">
                    <Image
                      width={48}
                      height={48}
                      src={'/images/jobs/salary range.png'}
                      alt="service-image"
                    />
                  </Box>
                  <Box className="job-info">
                    <Typography className="content-text">
                      Salary Range
                    </Typography>
                    <Typography className="job-text">
                      Range {result?.data[0].lower_range}-
                      {result?.data[0].upper_range}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="job-role-info">
                <Typography className="job-title">
                  {jobPageHeader.slice(0, 0)}
                  <span style={{ color: 'var(--primary-green)' }}>
                    {jobResponsibility.slice(0, 4)}
                  </span>
                  {jobResponsibility.slice(4, 20)}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{
                    __html: result?.data[0].description,
                  }}
                />
              </Box>
            </div>
          </Container>
        </Box>
      </Container>
    </>
  )
}

export default JobDetail
