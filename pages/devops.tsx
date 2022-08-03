import React from 'react'
import { devOps } from '../data/data'
import { Container, Box, Typography } from '@mui/material'
import Head from 'next/head'
// eslint-disable-next-line
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
            <Typography className="heading-text">{header}</Typography>
            <Typography>{heading}</Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Box className="page-content">
          {description.map((item, index) => {
            return <Typography key={index}>{item}</Typography>
          })}
          <Typography>{paraHeading}</Typography>

          {paraList.map((item, index) => (
            <Box key={index}>
              <ul className="content-list">
                <li>
                  <Typography>{item}</Typography>
                </li>
              </ul>
            </Box>
          ))}
        </Box>
        {/* <Subscribe /> */}
      </Container>
    </>
  )
}

export default devops
