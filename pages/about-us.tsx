import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Image from 'next/image'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
// eslint-disable-next-line
import Vision from '../components/Presentational/Vision/Vision'
import Head from 'next/head'
import fs from 'fs'
import { ABOUT_US_PATH } from '../utils/constants'
import { getMarkDownSingleData } from '../utils/markdown'
import { AboutUs } from '../types/interfaces'

// eslint-disable-next-line
const AboutUs = ({ frontmatter, content }: AboutUs) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="about-us-page">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {frontmatter.heading.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {frontmatter.heading.slice(6, 15)}
              </span>
              {frontmatter.heading.slice(15, 32)} 🚀
            </Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="image-header-container">
          <Box className="image-header">
            <Image
              src={frontmatter.image}
              className="image"
              alt="aboutus"
              layout="responsive"
              width={100}
              height={100}
            />
          </Box>
          <Box className="image-content-container">
            <Typography className="image-text">
              <span style={{ color: 'var(--primary-green)' }}>
                {frontmatter.header.slice(0, 15)}
              </span>{' '}
              {frontmatter.header.slice(15, 26)}
            </Typography>
            <Typography className="description">
              {frontmatter.description}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AboutUs

export async function getStaticProps() {
  return getMarkDownSingleData(fs, ABOUT_US_PATH)
}
