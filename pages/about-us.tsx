import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Image from 'next/image'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
// eslint-disable-next-line
import Vision from '../components/Presentational/Vision/Vision'
import AboutUsHeader from '../public/images/about-us-header.svg'
import { aboutUsPageData } from '../data/data'
import Head from 'next/head'

const AboutUs = () => {
  const {
    title,
    header,
    heading,
    aim,
    description,
    // eslint-disable-next-line
    visionData,
    // eslint-disable-next-line
    visionImage,
    // eslint-disable-next-line
    visionAim,
    // eslint-disable-next-line
    visionTitle,
  } = aboutUsPageData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="about-us-page">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {header.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(6, 15)}
              </span>
              {header.slice(15, 32)} 🚀
            </Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="image-header-container">
          <Box className="image-header">
            <Image
              src={AboutUsHeader}
              className="image"
              alt="aboutus"
              layout="responsive"
            />
          </Box>
          <Box className="image-content-container">
            <Typography className="image-text">
              <span style={{ color: 'var(--primary-green)' }}>
                {heading.slice(0, 15)}
              </span>{' '}
              {heading.slice(15, 26)}
            </Typography>
            <Typography className="aim">{aim}</Typography>
            <Typography className="description">{description}</Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AboutUs
