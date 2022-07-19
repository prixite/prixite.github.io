import React from 'react'
import { wordPressDevelopment } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const WordPressDevelopment = () => {
  const { title, header, heading, para1, para2, serviceHeading, services } =
    wordPressDevelopment
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
              {header.slice(0, 10)}
              <span style={{ color: 'var(--primary-green)' }}>
                {header.slice(10, 21)}
              </span>
            </Typography>
            <Typography>{heading}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Container className="page-content" maxWidth="lg">
          <Typography fontSize={18}>{para1}</Typography>
          <Typography fontSize={18}>{serviceHeading}</Typography>
          {services.map((service, index) => {
            return (
              <Typography key={index} lineHeight={0} fontSize={18}>
                <li>{service}</li>
              </Typography>
            )
          })}
          <Typography fontSize={18}>{para2}</Typography>
        </Container>
        <Subscribe />
      </Container>
    </>
  )
}

export default WordPressDevelopment
