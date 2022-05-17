import React from 'react'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { footerData } from '../../constants/constants'

const Footer = () => {
  const router = useRouter()
  const { address, phone, email, copyright } = footerData

  return (
    <Box className='footer-container'>
      <Typography className='heading-1'>
        {address}
      </Typography>
      <Typography className='heading-2'>
        Phone: {phone} | Email:{" "}
        <span
          onClick={() => router.push("mailto:hi@prixite.com")}
          className='heading-3'
        >
          {email}
        </span>
      </Typography>
      <Typography className='heading-4'>
        {copyright}
      </Typography>
    </Box>
  )
}

export default Footer