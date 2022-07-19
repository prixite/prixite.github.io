import React from 'react'
import { pythonProgramming } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const PythonProgramming = () => {
  const { title, header, heading, details, description, paraList } =
    pythonProgramming
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
          {details.map((detail, index) => {
            return <Typography key={index}>{detail}</Typography>
          })}
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

export default PythonProgramming
