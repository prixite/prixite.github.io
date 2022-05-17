import React from 'react'
import Head from 'next/head'
import { reactDevelopment } from '../constants/constants'
import Header from '../components/header/Header'
import reactBgImg from '../public/images/reactjs.jpg'
import reactImg from '../public/images/React.png'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'
import Image from 'next/image'

const ReactDevelopment = () => {
  const { title, header, heading, details, description, paraList, para } = reactDevelopment
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={reactBgImg}>
        <Container maxWidth="xl">
          <Stack
            pt={{ xs: "80px", lg: "200px" }}
            pb={{ xs: "100px", lg: "200px" }}
            direction={{ xs: "column", md: "row" }}
            spacing={5}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {header}
              </Typography>
              <Divider
                textAlign="left"
                sx={{
                  width: "17%",
                  marginTop: "2rem",
                  borderColor: "var(--primary-green)",
                  borderWidth: "1px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  marginTop: "1rem",
                  color: "white",
                }}
              >
                {heading}
              </Typography>
            </Box>
            <Box textAlign="center">
              <Image
                unoptimized
                priority
                src={reactImg}
                width={800}
                height={450}
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
          opacity: 0.8
        }}
        maxWidth='xl'
      >
        {details.map((item, index) => <Typography key={index}>{item}</Typography>)}

        <Typography>{description}</Typography>

        {paraList.map((item, index) => (
          <Box key={index}>
            <ul className='wordpress-list'>
              <li>{item}</li>
            </ul>
          </Box>
        ))}

        <Typography>{para}</Typography>
      </Container>

    </>
  )
}

export default ReactDevelopment