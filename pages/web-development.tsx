import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { webDevelopment } from '../data/data'
import Head from 'next/head'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const Webdevelopment = () => {
  const { title, header, heading, description } = webDevelopment
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {header.slice(0, 7)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(7, 19)}
              </span>
            </Typography>
            <Typography>{heading}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="page-content">
          {description.map((desc, index) => {
            return <Typography key={index}>{desc}</Typography>
          })}
        </Box>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default Webdevelopment
