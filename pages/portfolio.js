import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import homePageBg from "../public/images/homePageBg.png";
import { Box, Typography, Container, Grid, Divider } from '@mui/material'
import { portfolioData } from '../constants/constants'
import Image from 'next/image'
import Card from '../components/Card/Card'

const portfolio = () => {
    const { title, header, heading, projects } = portfolioData
    return (
        <div className='portfolio-page'>
            <Head>
                <title>{title}</title>
                <meta name="prixite" content="Prixte" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header bgImg={homePageBg}>
                <Box className='careers-container'>
                    <Typography
                        variant="h2"
                        textAlign="center"
                        className='careers-heading'
                    >
                        {header}
                    </Typography>
                </Box>
            </Header>
            <Container maxWidth='xl'>

                <Box p="5rem 1.5rem">
                    <Typography
                        variant="h4"
                        className='projects-heading'>
                        {heading}
                    </Typography>

                    <Divider
                        variant="middle"
                        className='projects-divider'
                        sx={{ mx: 'auto', fill: 'true', width: '8%' }}
                    />

                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columnSpacing={10}
                    >
                        {projects.map((project, index) => {
                            return (
                                <Card 
                                    key={index} 
                                    image={project.image} 
                                    name={project.name} 
                                    description={project.description}
                                />
                            )
                        })}
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default portfolio