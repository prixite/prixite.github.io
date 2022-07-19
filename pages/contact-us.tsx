import React from 'react'
import Header from '../components/Shared/header/Header'
import contactUsPageBg from '../public/images/contactUsPageBg.png'
import {
  Box,
  Typography,
  Container,
  Grid,
  Stack,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { contactUs } from '../data/data'
import Head from 'next/head'
import Subscribe from '../components/Shared/Subscribe/Subscribe'
import ContactButton from '../components/Smart/ContactButton/ContactButton'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import ContactForm from '../components/Smart/ContactForm/ContactForm'


const ContactUs = () => {
  const { title, heading } = contactUs

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="services-page">
        <Box className="header">
          <Box className="heading">
            <Typography fontSize={30} fontWeight={600}>
              {heading.slice(0, 24)}
              <span style={{ color: 'var(--primary-green)' }}>
                {heading.slice(24, 41)}
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'var(--primary-green)',
              color: 'white',
              padding: 2,
              borderRadius: 10,
            }}
            display="flex"
          >
            <LocalPhoneOutlinedIcon fontSize="medium" />
          </Box>
        </Box>

        <Container maxWidth="lg">
          <ContactForm />
        </Container>

        <Subscribe />
      </Container>
    </>
  )
}

export default ContactUs
