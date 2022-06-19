import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'
import { webDevelopment } from '../constants/data'
import WebDevelopmentImage from '../public/images/web-development.png'
import webDevelopmentBgImg from '../public/images/webDevelopment.jpg'
import Image from 'next/image'

const Webdevelopment = () => {
  const { title, header, heading, description } = webDevelopment
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={webDevelopmentBgImg}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: '80px', lg: '200px' }}
            pb={{ xs: '100px', lg: '200px' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                {header}
              </Typography>
              <Divider
                textAlign="left"
                sx={{
                  width: '17%',
                  marginTop: '2rem',
                  borderColor: 'var(--primary-green)',
                  borderWidth: '1px',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                  marginTop: '1rem',
                  color: 'white',
                }}
              >
                {heading}
              </Typography>
            </Box>
            <Box textAlign="center">
              <Image
                unoptimized
                priority
                src={WebDevelopmentImage}
                width={800}
                height={450}
                alt="service-image"
              />
            </Box>
          </Stack>
        </Container>
      </Header>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          py: 10,
          opacity: 0.8,
        }}
        maxWidth="xl"
      >
        {description.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
      </Container>
    </>
  )
}

export default Webdevelopment
