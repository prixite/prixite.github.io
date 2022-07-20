import React from 'react'
import { devOps } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'

const devops = () => {
  const { title, header, heading, description, paraHeading, paraList } = devOps
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
          {description.map((item, index) => {
            return (
              <Typography key={index} fontSize={18}>
                {item}
              </Typography>
            )
          })}
          <Typography fontSize={18}>{paraHeading}</Typography>

          {paraList.map((item, index) => (
            <Box key={index}>
              <ul className="content-list">
                <li>{item}</li>
              </ul>
            </Box>
          ))}
        </Container>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default devops
