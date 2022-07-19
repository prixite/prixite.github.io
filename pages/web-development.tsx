import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { webDevelopment } from '../data/data'
import Head from 'next/head'
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
            <Typography fontSize={30} fontWeight={600}>
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

        <Container className="page-content" maxWidth="lg">
          {description.map((desc, index) => {
            return <Typography fontSize={18}>{desc}</Typography>
          })}
        </Container>
        <Subscribe />
      </Container>
    </>
  )
}

export default Webdevelopment
