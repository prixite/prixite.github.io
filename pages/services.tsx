import { Container, Box, Typography, Grid } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Service from '../components/Presentational/Service/Service'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import { servicesData } from '../data/data'

const services = () => {
  const { servicesPageTitle, servicesPageHeader, services } = servicesData
  return (
    <>
      <Head>
        <title>{servicesPageTitle}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="services-page">
        <Box className="header">
          <Box className="heading">
            <Typography fontSize={30} fontWeight={600}>
              {servicesPageHeader.slice(0, 6)}
              <span style={{ color: 'var(--primary-green)' }}>
                {servicesPageHeader.slice(6, 15)}
              </span>
              {servicesPageHeader.slice(15, 39)}
            </Typography>
          </Box>
          <Box>
            <ContactButton text="Contact Us" />
          </Box>
        </Box>

        <Grid container spacing={{ xs: 2, md: 7 }} columnSpacing={3}>
          {services.map((item, index) => (
            <Service
              key={index}
              img={item.img}
              title={item.title}
              description={item.desc}
            />
          ))}
        </Grid>
        <Subscribe />
      </Container>
    </>
  )
}

export default services
