import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Image from 'next/image'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import Vision from '../components/Presentational/Vision/Vision'
import AboutUsHeader from '../public/images/about-us-header.svg'
import { aboutUsPageData } from '../data/data'

const AboutUs = () => {
  const {
    header,
    heading,
    aim,
    description,
    visionData,
    visionImage,
    visionAim,
    visionTitle,
  } = aboutUsPageData
  return (
    <Container maxWidth="xl" className="about-us-page">
      <Box className="header">
        <Box className="heading">
          <Typography fontSize={30} fontWeight={600}>
            {header.slice(0, 6)}
            <span style={{ color: 'var(--primary-green)' }}>
              {header.slice(6, 14)}
            </span>
            {header.slice(14, 32)}
          </Typography>
        </Box>
        <Box>
          <ContactButton text="Contact Us" />
        </Box>
      </Box>

      <Box className="image-header-container">
        <Box className="image-header">
          <Image src={AboutUsHeader} className="image" />
        </Box>
        <Box className="image-content-container">
          <Typography fontSize={30} fontWeight={600}>
            <span style={{ color: 'var(--primary-green)' }}>
              {heading.slice(0, 15)}
            </span>{' '}
            {heading.slice(15, 26)}
          </Typography>
          <Typography>{aim}</Typography>
          <Typography className="description">{description}</Typography>
        </Box>
      </Box>

      <Vision
        aboutUsVisionImg={visionImage}
        visionAim={visionAim}
        visionData={visionData}
        visionTitle={visionTitle}
      />
      <Subscribe />
    </Container>
  )
}

export default AboutUs
