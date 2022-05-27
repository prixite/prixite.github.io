import React from 'react'
import Head from 'next/head';
import Header from '../components/header/Header';
import contactUsPageBg from '../public/images/contactUsPageBg.png'
import { Box, Typography, Container, Grid, Stack } from '@mui/material';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { contactUs } from '../constants/constants';

const ContactUs = () => {
    const { title, heading, description, contactInfo } = contactUs;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="prixite" content="Prixte" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header bgImg={contactUsPageBg}>
                <Box
                    sx={{
                        pt: { xs: "100px", lg: "230px" },
                        pb: { xs: "100px", lg: "190px" },
                    }}
                >
                    <Typography variant="h2" textAlign="center" className='contact-us-heading'>
                        {heading}
                    </Typography>
                </Box>
            </Header>
            <Container maxWidth="xl">
                <Grid container spacing={'7rem'} sx={{ py: '120px' }}>
                    <Grid item xs={12} md={6}>
                        {description.map((item, index) => (
                            <Box key={index}>
                                <Typography variant='h5' fontWeight='bold' mb='1rem'>
                                    {item.title}
                                </Typography>

                                <Typography sx={{ letterSpacing: '1px' }}>
                                    {item.para}
                                </Typography>
                            </Box>
                        ))}
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Typography variant="h3" fontWeight="bold">
                            {contactInfo.title}
                        </Typography>

                        {contactInfo.details.map((item, index) => (
                            <Box key={index}>
                                <Typography fontWeight="bold" mt="2rem">
                                    {item.heading}
                                </Typography>
                                <Typography>{item.contact}</Typography>
                            </Box>
                        ))}

                        <Stack
                            direction='row'
                            mt='2rem'
                            spacing={3}
                            sx={{
                                justifyContent: { xs: "center", md: "left" },
                            }}
                        >
                            <a target="_blank" href='https://web.facebook.com/prixite/'>
                                <FacebookRoundedIcon
                                    htmlColor="var(--icon-grey-color)"
                                    fontSize="large"
                                    className='contact-icon'
                                />
                            </a>

                            <a target="_blank" href="https://www.linkedin.com/company/prixite/about/?viewAsMember=true">
                                <LinkedInIcon
                                    htmlColor="var(--icon-grey-color)"
                                    fontSize="large"
                                    className='contact-icon'
                                />
                            </a>

                            <a target="_blank" href="https://github.com/Prixite">
                                <GitHubIcon
                                    htmlColor="var(--icon-grey-color)"
                                    fontSize="large"
                                    className='contact-icon'
                                />
                            </a>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ContactUs