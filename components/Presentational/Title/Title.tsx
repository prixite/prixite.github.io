import { Box, Typography } from '@mui/material'
import router from 'next/router'
import React from 'react'
import { siteName } from '../../../data/data'
import Image from 'next/image'
import logoImg from '../../../public/images/prixite-logo.png'

const Title = () => {
  return (
    <Box className="title-container">
      <Box className="title-image">
        <Image
          src={logoImg.src}
          alt={siteName}
          onClick={() => router.push('/')}
          width={30}
          height={30}
        />
      </Box>
      <Typography className="title-heading" onClick={() => router.push('/')}>
        {siteName}
        <span style={{ color: '#63AC45' }}>.</span>
      </Typography>
    </Box>
  )
}

export default Title
