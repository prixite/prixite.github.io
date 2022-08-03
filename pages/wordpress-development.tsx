import React from 'react'
import { wordPressDevelopment } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
// eslint-disable-next-line
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
            <Typography className="heading-text">
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

        <Box className="page-content">
          <Typography>{para1}</Typography>
          <Typography>{serviceHeading}</Typography>
          {services.map((service, index) => {
            return (
              <Box key={index}>
                <ul className="content-list">
                  <li>
                    <Typography>{service}</Typography>
                  </li>
                </ul>
              </Box>
            )
          })}
          <Typography>{para2}</Typography>
        </Box>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default WordPressDevelopment
