import React from 'react'
import Head from 'next/head';
import { devOps } from '../constants/constants';
import Header from '../components/header/Header';
import devOpsAsService from '../public/images/devOpsAsService.png'
import { Container, Stack, Box, Typography, Divider } from '@mui/material';

const devops = () => {
    const { title, header, heading, description, paraHeading, paraList } = devOps
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="prixite" content="Prixte" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header bgImg={devOpsAsService}>
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
                    </Stack>
                </Container>
            </Header>

            <Container 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 4, 
                    py: 10, 
                    opacity: 0.8 }} 
                maxWidth='xl'
            >
                {description.map((item, index) => {
                    return (
                        <Typography key={index}>{item}</Typography>
                    )
                })}

                <Typography>{paraHeading}</Typography>
                
                {paraList.map((item, index) => (
                    <Box key={index}>
                        <ul className='devops-list'>
                            <li>{item}</li>
                        </ul>
                    </Box>
                ))}
            </Container>
        </>
    )
}

export default devops