import React from 'react'
import Header from '../components/Shared/header/Header'
import homePageBg from '../public/images/homePageBg.png'
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import { clientsData } from '../data/data'
import ClientCard from '../components/Presentational/ClientCard/ClientCard'
import Head from 'next/head'

const clients = () => {
  const { title, header, heading, clients } = clientsData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="clients-page">
        <Box className="careers-container">
          <Typography
            variant="h2"
            textAlign="center"
            className="careers-heading"
          >
            {header}
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Box p="5rem 1.5rem">
            <Typography variant="h4" className="clients-heading">
              {heading}
            </Typography>

            <Divider
              variant="middle"
              className="clients-divider"
              sx={{ mx: 'auto', fill: 'true', width: '8%' }}
            />

            <Grid container>
              {clients.map((client, index) => {
                return (
                  <ClientCard
                    key={index}
                    image={client.image.src}
                    name={client.clientName}
                    project={client.projectName}
                    description={client.description}
                  />
                )
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default clients
