import React from 'react'
import { progressiveWebApp } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const ProgressiveWebApplication = () => {
  const { title, header, heading, details, description, paraList, para } =
    progressiveWebApp
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
            <Typography className="heading-text">{header}</Typography>
            <Typography>{heading}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="page-content">
          {details.map((detail, index) => {
            return <Typography key={index}>{detail}</Typography>
          })}
          <Typography>{description}</Typography>

          {paraList.map((service, index) => {
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
          <Typography>{para}</Typography>
        </Box>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default ProgressiveWebApplication
