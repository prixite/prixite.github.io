import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import careersPageBg from '../public/images/careersPageBg.jpg'
import { Box, Typography, Container, TextField, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { careersData } from '../constants/constants'

const careers = () => {
  const { title, heading, buttonText } = careersData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header bgImg={careersPageBg}>
        <Box className='careers-container'>
          <Typography
            variant="h2"
            textAlign="center"
            className='careers-heading'
          >
            {heading}
          </Typography>
        </Box>
      </Header>

      <Container maxWidth='xl'
        sx={{
          my: 10,
          p: 2,
          backgroundColor: '	#F8F8F8',
        }}
      >
        <Box sx={{ display: 'flex', gap: 3 }}>
          <TextField fullWidth placeholder="Keywords" />
          <TextField fullWidth placeholder="Location" />
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            borderRadius: 7,
            backgroundColor: '#64aa44',
            mt: 1,
            '&:hover': {
              backgroundColor: '#64aa44'
            }
          }}
          size='large'>
          {buttonText}
        </Button>

        <FormGroup row>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Full Time" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Internship" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Part Time" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remote" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Temporary" />
        </FormGroup>
      </Container>
    </>
  )
}

export default careers
