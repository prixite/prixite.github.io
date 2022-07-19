import React from 'react'
import { scrapingData } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const scraping = () => {
  const { title, header, heading, description, paraList } = scrapingData

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
              {header}
            </Typography>
            <Typography>{heading}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Container className="page-content" maxWidth="lg">
          <Typography fontSize={18}>{description}</Typography>

          {paraList.map((service, index) => {
            return (
              <Box key={index}>
                <ul className="content-list">
                  <li>{service}</li>
                </ul>
              </Box>
            )
          })}
        </Container>
        <Subscribe />
      </Container>
    </>
  )
}

export default scraping
