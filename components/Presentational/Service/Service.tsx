import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'

interface ServiceProps {
  img: StaticImageData
  title: string
  description: string
}
const Service: React.FC<ServiceProps> = ({ img, title, description }) => {
  return (
    <Grid item sm={12} md={3}>
      <Box marginBottom="10px">
        <Box className="service-image-container">
          <Image unoptimized priority src={img} alt="service-image" />
        </Box>

        <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="18px">
          {title}
        </Typography>

        <Typography className="service-description">{description}</Typography>
      </Box>
    </Grid>
  )
}

export default Service
