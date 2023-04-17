import { Box, Typography } from '@mui/material'
import React from 'react'
import { siteName } from '../../../data/data'
import Image from 'next/image'
import logoImg from '../../../public/images/prixite-logo.png'
import Link from 'next/link'

const Title = () => {
  return (
    <Box className="title-container">
      <Link href="/" className="title-link">
        <Box className="title-image">
          <Image src={logoImg.src} alt={siteName} width={30} height={30} />
        </Box>
        <Typography className="title-heading">
          {siteName}
          <span style={{ color: '#63AC45' }}>.</span>
        </Typography>
      </Link>
    </Box>
  )
}

export default Title
